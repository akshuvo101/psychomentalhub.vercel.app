import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

/*
 * -------------------------------------------------------
 * Rate Limiting
 * -------------------------------------------------------
 *
 * Maximum 5 contact requests from the same IP
 * within 10 minutes.
 */

const RATE_LIMIT_WINDOW = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 5;

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const rateLimitStore = new Map<string, RateLimitEntry>();

/*
 * -------------------------------------------------------
 * Contact Form Validation
 * -------------------------------------------------------
 */

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters.")
    .max(100, "Name is too long."),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(254, "Email address is too long."),

  subject: z
    .string()
    .trim()
    .min(3, "Subject must be at least 3 characters.")
    .max(200, "Subject is too long."),

  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters.")
    .max(5000, "Message is too long."),

  /*
   * Honeypot field.
   *
   * Real users should leave this empty.
   * Bots often automatically fill every input.
   */
  website: z.string().max(0).optional(),
});

/*
 * -------------------------------------------------------
 * Get Client IP
 * -------------------------------------------------------
 */

function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  const realIp = request.headers.get("x-real-ip");

  if (realIp) {
    return realIp.trim();
  }

  return "unknown";
}

/*
 * -------------------------------------------------------
 * Rate Limit Check
 * -------------------------------------------------------
 */

function checkRateLimit(ip: string) {
  const now = Date.now();

  const existing = rateLimitStore.get(ip);

  /*
   * No previous request or previous window expired.
   */
  if (!existing || now >= existing.resetAt) {
    rateLimitStore.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW,
    });

    return {
      allowed: true,
      remaining: MAX_REQUESTS - 1,
      retryAfter: 0,
    };
  }

  /*
   * Too many requests.
   */
  if (existing.count >= MAX_REQUESTS) {
    return {
      allowed: false,
      remaining: 0,
      retryAfter: Math.ceil((existing.resetAt - now) / 1000),
    };
  }

  /*
   * Increment request count.
   */
  existing.count += 1;

  rateLimitStore.set(ip, existing);

  return {
    allowed: true,
    remaining: MAX_REQUESTS - existing.count,
    retryAfter: 0,
  };
}

/*
 * -------------------------------------------------------
 * Escape HTML
 * -------------------------------------------------------
 *
 * Prevents user input from being interpreted as HTML
 * inside the notification email.
 */

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/*
 * -------------------------------------------------------
 * POST /api/contact
 * -------------------------------------------------------
 */

export async function POST(request: Request) {
  try {
    /*
     * -----------------------------------------------------
     * 1. Rate limiting
     * -----------------------------------------------------
     */

    const ip = getClientIp(request);

    const rateLimit = checkRateLimit(ip);

    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Too many messages have been submitted. Please try again later.",
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(rateLimit.retryAfter),
          },
        }
      );
    }

    /*
     * -----------------------------------------------------
     * 2. Check Resend configuration
     * -----------------------------------------------------
     */

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured.");

      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured.",
        },
        { status: 500 }
      );
    }

    /*
     * -----------------------------------------------------
     * 3. Parse JSON body
     * -----------------------------------------------------
     */

    let body: unknown;

    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid request body.",
        },
        { status: 400 }
      );
    }

    /*
     * -----------------------------------------------------
     * 4. Honeypot protection
     * -----------------------------------------------------
     *
     * If "website" contains anything, treat the request
     * as a bot.
     *
     * We intentionally return a generic success response
     * so the bot doesn't know it was detected.
     */

    if (
      typeof body === "object" &&
      body !== null &&
      "website" in body &&
      typeof (body as { website?: unknown }).website === "string" &&
      (body as { website: string }).website.trim() !== ""
    ) {
      return NextResponse.json(
        {
          success: true,
          message: "Your message has been sent successfully.",
        },
        { status: 200 }
      );
    }

    /*
     * -----------------------------------------------------
     * 5. Validate input with Zod
     * -----------------------------------------------------
     */

    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Please check your form information and try again.",
        },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = result.data;

    /*
     * -----------------------------------------------------
     * 6. Escape all user-controlled content
     * -----------------------------------------------------
     */

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message);

    /*
     * -----------------------------------------------------
     * 7. Send notification to owner
     * -----------------------------------------------------
     *
     * The visitor's email is used as replyTo.
     *
     * When you click "Reply" from Gmail,
     * your reply will go directly to the visitor.
     */

    const { error: notificationError } = await resend.emails.send({
      from: "PsychoMentalHub <onboarding@resend.dev>",
      to: ["akshuvo163@gmail.com"],
      replyTo: email,
      subject: `PsychoMentalHub Contact: ${subject}`,

      html: `
        <div
          style="
            font-family: Arial, Helvetica, sans-serif;
            max-width: 680px;
            margin: 0 auto;
            padding: 32px;
            background: #f8fafc;
          "
        >
          <div
            style="
              background: #ffffff;
              border-radius: 16px;
              padding: 32px;
              border: 1px solid #e2e8f0;
            "
          >

            <div style="margin-bottom: 28px;">
              <h1
                style="
                  margin: 0 0 8px;
                  color: #064e3b;
                  font-size: 24px;
                "
              >
                New Contact Message
              </h1>

              <p
                style="
                  margin: 0;
                  color: #64748b;
                  font-size: 14px;
                "
              >
                Someone submitted the contact form on PsychoMentalHub.
              </p>
            </div>

            <div style="margin-bottom: 20px;">
              <p
                style="
                  margin: 0 0 6px;
                  color: #64748b;
                  font-size: 13px;
                "
              >
                Name
              </p>

              <p
                style="
                  margin: 0;
                  color: #0f172a;
                  font-size: 16px;
                  font-weight: 600;
                "
              >
                ${safeName}
              </p>
            </div>

            <div style="margin-bottom: 20px;">
              <p
                style="
                  margin: 0 0 6px;
                  color: #64748b;
                  font-size: 13px;
                "
              >
                Email
              </p>

              <p
                style="
                  margin: 0;
                  color: #0f172a;
                  font-size: 16px;
                  word-break: break-word;
                "
              >
                ${safeEmail}
              </p>
            </div>

            <div style="margin-bottom: 20px;">
              <p
                style="
                  margin: 0 0 6px;
                  color: #64748b;
                  font-size: 13px;
                "
              >
                Subject
              </p>

              <p
                style="
                  margin: 0;
                  color: #0f172a;
                  font-size: 16px;
                  font-weight: 600;
                  word-break: break-word;
                "
              >
                ${safeSubject}
              </p>
            </div>

            <div>
              <p
                style="
                  margin: 0 0 8px;
                  color: #64748b;
                  font-size: 13px;
                "
              >
                Message
              </p>

              <div
                style="
                  background: #f8fafc;
                  border-radius: 12px;
                  padding: 18px;
                  color: #334155;
                  font-size: 15px;
                  line-height: 1.7;
                  white-space: pre-wrap;
                  word-break: break-word;
                "
              >
                ${safeMessage}
              </div>
            </div>

            <div
              style="
                margin-top: 28px;
                padding-top: 20px;
                border-top: 1px solid #e2e8f0;
              "
            >
              <p
                style="
                  margin: 0;
                  color: #94a3b8;
                  font-size: 12px;
                "
              >
                Sent securely from the PsychoMentalHub contact form.
              </p>
            </div>

          </div>
        </div>
      `,
    });

    /*
     * -----------------------------------------------------
     * 8. Notification failed
     * -----------------------------------------------------
     */

    if (notificationError) {
      console.error("Resend notification error:", notificationError);

      return NextResponse.json(
        {
          success: false,
          message: "Failed to send your message. Please try again.",
        },
        { status: 500 }
      );
    }

    /*
     * -----------------------------------------------------
     * 9. Success
     * -----------------------------------------------------
     *
     * No automatic visitor email is sent.
     */

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully.",
      },
      {
        status: 200,
        headers: {
          "X-RateLimit-Remaining": String(rateLimit.remaining),
        },
      }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again later.",
      },
      { status: 500 }
    );
  }
}