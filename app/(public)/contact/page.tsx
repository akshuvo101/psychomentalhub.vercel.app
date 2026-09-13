"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import {
  ShieldAlert,
  MessageSquare,
  HelpCircle,
  Send,
  Building2,
  LockKeyhole,
  Brain,
  UserRoundCheck,
  Wrench,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  const faqs = [
    {
      question: "How can I get started with PsychoMentalHub?",
      answer:
        "You can create an account and begin with the guided wellness assessment. Your assessment results can then provide personalized insights and practical recommendations.",
    },
    {
      question: "How does the wellness assessment work?",
      answer:
        "PsychoMentalHub uses a structured 12-question assessment covering areas such as mood, stress, sleep, focus, and everyday wellbeing.",
    },
    {
      question: "Is my wellness information protected?",
      answer:
        "PsychoMentalHub uses authenticated access, role-based permissions, and database-level security policies to help protect user information.",
    },
    {
      question: "Can I receive support from a counselor?",
      answer:
        "PsychoMentalHub includes support workflows that can help students connect with counselors or appropriate professional support when needed.",
    },
    {
      question: "Does the AI replace a mental health professional?",
      answer:
        "No. AI guidance is intended to be supportive and informational. It does not replace diagnosis, treatment, or professional mental healthcare.",
    },
    {
      question: "Does PsychoMentalHub provide emergency services?",
      answer:
        "No. PsychoMentalHub is not an emergency healthcare service. If you are experiencing an immediate medical or mental health emergency, contact your local emergency services or an appropriate crisis service.",
    },
  ];

  const supportCategories = [
    {
      icon: MessageSquare,
      title: "General Support",
      description:
        "Questions about using PsychoMentalHub or understanding the platform.",
    },
    {
      icon: Wrench,
      title: "Technical Assistance",
      description:
        "Help with account access, platform issues, or technical problems.",
    },
    {
      icon: Brain,
      title: "Wellness Support",
      description:
        "Questions about assessments, insights, recommendations, or AI guidance.",
    },
    {
      icon: UserRoundCheck,
      title: "Professional Support",
      description:
        "Questions related to counselor or professional support workflows.",
    },
    {
      icon: Building2,
      title: "Institutional Enquiries",
      description:
        "Enquiries from educational teams interested in the platform.",
    },
    {
      icon: LockKeyhole,
      title: "Privacy & Security",
      description:
        "Questions about account security, permissions, and wellness information.",
    },
  ];

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);

    setStatus({
      type: null,
      message: "",
    });

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const subject = String(formData.get("subject") || "").trim();
    const message = String(formData.get("message") || "").trim();

    /*
     * Honeypot field.
     *
     * Normal users leave this empty.
     * Bots that automatically fill every field may populate it.
     */
    const website = String(formData.get("website") || "").trim();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
          website,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.message || "Failed to send your message. Please try again."
        );
      }

      setStatus({
        type: "success",
        message:
          data?.message ||
          "Your message has been sent successfully. We'll get back to you soon.",
      });

      form.reset();
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="overflow-hidden bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/contact-hero.jpg"
            alt="PsychoMentalHub support"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-slate-950/75" />

          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/80 via-slate-950/75 to-cyan-950/70" />
        </div>

        <div className="absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-cyan-500/15 blur-3xl" />

        <div className="relative container mx-auto px-6 py-28 lg:py-40">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300 backdrop-blur-md"
            >
              <MessageSquare className="h-4 w-4" />
              Contact PsychoMentalHub
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="mt-6 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              We&apos;re Here to{" "}
              <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                Help
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 lg:text-xl"
            >
              Have a question about PsychoMentalHub, your wellness assessment,
              AI guidance, account access, or the platform experience? Send us
              a message and let us know how we can help.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur-md">
                <Brain className="h-4 w-4 text-emerald-300" />
                Wellness Support
              </div>

              <div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur-md">
                <ShieldAlert className="h-4 w-4 text-cyan-300" />
                Responsible AI
              </div>

              <div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur-md">
                <LockKeyhole className="h-4 w-4 text-emerald-300" />
                Privacy Focused
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTACT OPTIONS */}
      <section className="relative py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-semibold uppercase tracking-[0.18em] text-emerald-500">
              Get In Touch
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              How Can We Help?
            </h2>

            <p className="mt-5 text-slate-600 dark:text-slate-400">
              Choose the area that best describes your question and send us a
              message through the contact form.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
            {[
              {
                icon: MessageSquare,
                title: "General Questions",
                text: "Ask about the platform, features, or how PsychoMentalHub works.",
              },
              {
                icon: Brain,
                title: "Wellness & AI",
                text: "Questions about assessments, insights, recommendations, or AI guidance.",
              },
              {
                icon: LockKeyhole,
                title: "Account & Privacy",
                text: "Need help with access, permissions, or privacy-related questions?",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/50 hover:bg-emerald-50/60 hover:shadow-xl hover:shadow-emerald-500/10 dark:border-slate-800 dark:bg-slate-950 dark:hover:border-emerald-500/30 dark:hover:bg-emerald-950/20"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-500 transition-all duration-300 group-hover:bg-emerald-500 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold transition-colors duration-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FORM + SUPPORT */}
      <section className="relative bg-slate-50 py-24 dark:bg-slate-900/40">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            {/* FORM */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-7 shadow-xl shadow-slate-900/5 sm:p-9 dark:border-slate-800 dark:bg-slate-950"
            >
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-emerald-500/5 blur-3xl" />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-500">
                  <Send className="h-5 w-5" />
                </div>

                <h2 className="mt-5 text-3xl font-bold tracking-tight">
                  Send Us a Message
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  Tell us what you need help with. We&apos;ll use the
                  information you provide to understand your enquiry.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium"
                    >
                      Full Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      required
                      disabled={isSubmitting}
                      maxLength={100}
                      autoComplete="name"
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/10 disabled:cursor-not-allowed disabled:opacity-60 dark:border-slate-800 dark:bg-slate-900 dark:placeholder:text-slate-600"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                      disabled={isSubmitting}
                      maxLength={254}
                      autoComplete="email"
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/10 disabled:cursor-not-allowed disabled:opacity-60 dark:border-slate-800 dark:bg-slate-900 dark:placeholder:text-slate-600"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-sm font-medium"
                    >
                      Subject
                    </label>

                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="How can we help?"
                      required
                      disabled={isSubmitting}
                      maxLength={200}
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/10 disabled:cursor-not-allowed disabled:opacity-60 dark:border-slate-800 dark:bg-slate-900 dark:placeholder:text-slate-600"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      placeholder="Write your message here..."
                      required
                      disabled={isSubmitting}
                      maxLength={5000}
                      className="w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/10 disabled:cursor-not-allowed disabled:opacity-60 dark:border-slate-800 dark:bg-slate-900 dark:placeholder:text-slate-600"
                    />
                  </div>

                  {/* HONEYPOT ANTI-BOT FIELD */}
                  <div
                    aria-hidden="true"
                    className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden"
                  >
                    <label htmlFor="website">Website</label>

                    <input
                      id="website"
                      name="website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {/* STATUS MESSAGE */}
                  {status.type && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex items-start gap-3 rounded-2xl border p-4 text-sm ${
                        status.type === "success"
                          ? "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400"
                          : "border-red-200 bg-red-50 text-red-700 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-400"
                      }`}
                    >
                      {status.type === "success" ? (
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                      ) : (
                        <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
                      )}

                      <p className="leading-6">{status.message}</p>
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-emerald-500/25 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-slate-500 dark:text-slate-500">
                    Please do not include highly sensitive personal or medical
                    information in this form.
                  </p>
                </form>
              </div>
            </motion.div>

            {/* SUPPORT */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7 }}
            >
              <span className="font-semibold uppercase tracking-[0.18em] text-emerald-500">
                Support Areas
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight">
                Find the Right Support
              </h2>

              <p className="mt-4 text-slate-600 dark:text-slate-400">
                Whether you have a technical question or want to understand
                something about your wellness journey, you can reach out
                through the contact form.
              </p>

              <div className="mt-8 space-y-3">
                {supportCategories.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="group flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400/50 hover:bg-emerald-50/60 hover:shadow-lg hover:shadow-emerald-500/10 dark:border-slate-800 dark:bg-slate-950 dark:hover:border-emerald-500/30 dark:hover:bg-emerald-950/20"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500 transition-all duration-300 group-hover:bg-emerald-500 group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <h3 className="font-semibold transition-colors duration-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* RESPONSIBLE SUPPORT */}
      <section className="relative py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-[32px] border border-emerald-500/20 bg-gradient-to-br from-emerald-500/[0.08] via-teal-500/[0.05] to-cyan-500/[0.08] p-8 sm:p-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-500">
                <ShieldAlert className="h-6 w-6" />
              </div>

              <div>
                <h2 className="text-2xl font-bold">
                  A Responsible Approach to Wellness Support
                </h2>

                <p className="mt-3 max-w-3xl leading-7 text-slate-600 dark:text-slate-400">
                  PsychoMentalHub is designed to support awareness, reflection,
                  and access to appropriate guidance. AI-generated information
                  is not a medical diagnosis or a substitute for professional
                  care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EMERGENCY NOTICE */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="rounded-[32px] border border-red-200 bg-red-50 p-7 dark:border-red-500/20 dark:bg-red-500/5 sm:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-500/10">
                <ShieldAlert className="h-6 w-6 text-red-500" />
              </div>

              <div>
                <h2 className="text-xl font-bold text-red-600 dark:text-red-400">
                  Emergency Notice
                </h2>

                <p className="mt-2 max-w-4xl leading-7 text-slate-700 dark:text-slate-300">
                  PsychoMentalHub is not an emergency healthcare provider. If
                  you or someone else is in immediate danger or experiencing a
                  medical or mental health emergency, contact your local
                  emergency services or an appropriate emergency/crisis
                  service immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative bg-slate-50 py-24 dark:bg-slate-900/40">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-500">
              <HelpCircle className="h-6 w-6" />
            </div>

            <span className="mt-5 block font-semibold uppercase tracking-[0.18em] text-emerald-500">
              FAQ
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Frequently Asked Questions
            </h2>

            <p className="mt-4 text-slate-600 dark:text-slate-400">
              A few common questions about PsychoMentalHub and how it works.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-4xl space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="group rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-emerald-400/50 hover:bg-emerald-50/60 hover:shadow-lg hover:shadow-emerald-500/10 dark:border-slate-800 dark:bg-slate-950 dark:hover:border-emerald-500/30 dark:hover:bg-emerald-950/20"
              >
                <div className="flex gap-4">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-sm font-bold text-emerald-500">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>
                    <h3 className="font-semibold transition-colors duration-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                      {faq.question}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}