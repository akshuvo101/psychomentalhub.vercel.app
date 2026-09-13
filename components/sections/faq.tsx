
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Brain,
  ChevronDown,
  FileText,
  Lock,
  MessageCircleHeart,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Container from "@/components/layout/container";

const faqs = [
  {
    question: "What is PsychoMentalHub?",
    answer:
      "PsychoMentalHub is an AI-powered student mental wellness platform designed to help students better understand their emotional wellbeing through guided assessments, personalized AI insights, wellness recommendations, and access to professional support.",
    icon: Brain,
  },
  {
    question: "How does the wellness assessment work?",
    answer:
      "Students complete a structured 12-question wellness assessment covering areas such as mood, stress, sleep, focus, and daily wellbeing. Their responses are analyzed to provide an overall wellness insight with a confidence level and personalized recommendations.",
    icon: Sparkles,
  },
  {
    question: "How does the AI guidance work?",
    answer:
      "PsychoMentalHub uses AI to provide supportive and personalized wellness guidance based on the information available from the student's wellness experience. It is designed to help students reflect on their wellbeing and identify practical next steps.",
    icon: MessageCircleHeart,
  },
  {
    question: "Is my wellness information protected?",
    answer:
      "PsychoMentalHub uses authenticated access, role-based permissions, and database-level security policies to help protect user information. Access to different areas of the platform is controlled according to the user's role.",
    icon: ShieldCheck,
  },
  {
    question: "Can I get support from a counselor or professional?",
    answer:
      "Yes. PsychoMentalHub includes support workflows that allow students to connect with available counselors and other authorized professionals, helping them move from self-awareness and AI guidance toward appropriate human support when needed.",
    icon: MessageCircleHeart,
  },
  {
    question: "Can I generate a wellness report?",
    answer:
      "Yes. After completing the assessment, students can view their results and generate a structured wellness report containing their assessment outcome, wellness state, confidence level, and recommendations.",
    icon: FileText,
  },
  {
    question: "Does PsychoMentalHub replace professional mental health care?",
    answer:
      "No. PsychoMentalHub is a wellness and support tool, not a replacement for qualified mental health professionals. AI-generated guidance is intended for supportive informational purposes, and students should seek professional help when they need clinical assessment or care.",
    icon: Lock,
  },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      {/* Background Atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-8rem] top-20 h-80 w-80 rounded-full bg-emerald-500/10 blur-[130px]" />

        <div className="absolute right-[-8rem] bottom-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[130px]" />

        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-500/6 blur-[120px]" />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
      </div>

      <Container>
        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          transition={{
            duration: 0.65,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/8 px-4 py-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">
            <Sparkles className="h-4 w-4" />
            Frequently Asked Questions
          </div>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Everything You Need to
            <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
              {" "}
              Know
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400 sm:text-lg">
            Learn how PsychoMentalHub works, how your wellness experience is
            protected, and how AI-powered guidance fits into your journey.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="mx-auto mt-16 max-w-4xl space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = active === index;
            const Icon = faq.icon;

            return (
              <motion.div
                key={faq.question}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-60px",
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                }}
                className={`
                  group relative overflow-hidden rounded-2xl border
                  backdrop-blur-xl
                  transition-all duration-500
                  ${
                    isOpen
                      ? "border-emerald-400/40 bg-emerald-950/[0.035] shadow-xl shadow-emerald-500/10 dark:border-emerald-500/30 dark:bg-emerald-950/20"
                      : "border-slate-200/70 bg-white/65 shadow-md shadow-slate-200/20 dark:border-slate-800 dark:bg-slate-900/55"
                  }
                  hover:-translate-y-0.5
                  hover:border-emerald-400/50
                  hover:bg-emerald-50/70
                  hover:shadow-xl
                  hover:shadow-emerald-500/10
                  dark:hover:border-emerald-500/30
                  dark:hover:bg-emerald-950/25
                `}
              >
                {/* Premium Hover Glow */}
                <div
                  className="
                    pointer-events-none absolute
                    -right-20 -top-20
                    h-48 w-48
                    rounded-full
                    bg-emerald-500/0
                    blur-3xl
                    transition-all duration-700
                    group-hover:bg-emerald-500/15
                  "
                />

                {/* Bottom Green Glow */}
                <div
                  className="
                    pointer-events-none absolute
                    -bottom-24 left-1/3
                    h-32 w-64
                    rounded-full
                    bg-teal-500/0
                    blur-3xl
                    transition-all duration-700
                    group-hover:bg-teal-500/10
                  "
                />

                {/* Active Accent */}
                <motion.div
                  initial={false}
                  animate={{
                    opacity: isOpen ? 1 : 0,
                    scaleY: isOpen ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="
                    absolute left-0 top-0
                    h-full w-[3px]
                    origin-top
                    bg-gradient-to-b
                    from-emerald-400
                    via-teal-500
                    to-cyan-500
                  "
                />

                <button
                  type="button"
                  onClick={() =>
                    setActive(isOpen ? null : index)
                  }
                  aria-expanded={isOpen}
                  className="relative flex w-full items-center gap-4 px-5 py-5 text-left sm:px-6"
                >
                  {/* Icon */}
                  <div
                    className={`
                      flex h-10 w-10 shrink-0 items-center
                      justify-center rounded-xl
                      ring-1
                      transition-all duration-500
                      ${
                        isOpen
                          ? "bg-emerald-500/15 text-emerald-500 ring-emerald-500/25"
                          : "bg-slate-100 text-slate-500 ring-transparent group-hover:bg-emerald-500/15 group-hover:text-emerald-500 group-hover:ring-emerald-500/20 dark:bg-slate-800 dark:text-slate-400 dark:group-hover:bg-emerald-500/10"
                      }
                    `}
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </div>

                  {/* Question */}
                  <span
                    className={`
                      flex-1 pr-3
                      text-[15px] font-semibold leading-6
                      transition-colors duration-300
                      sm:text-base
                      ${
                        isOpen
                          ? "text-emerald-700 dark:text-emerald-300"
                          : "text-slate-800 group-hover:text-emerald-700 dark:text-slate-200 dark:group-hover:text-emerald-300"
                      }
                    `}
                  >
                    {faq.question}
                  </span>

                  {/* Chevron */}
                  <span
                    className={`
                      flex h-8 w-8 shrink-0
                      items-center justify-center
                      rounded-full
                      transition-all duration-500
                      ${
                        isOpen
                          ? "bg-emerald-500/15 text-emerald-500"
                          : "bg-slate-100 text-slate-500 group-hover:bg-emerald-500/15 group-hover:text-emerald-500 dark:bg-slate-800 dark:text-slate-400"
                      }
                    `}
                  >
                    <ChevronDown
                      className={`
                        h-4 w-4
                        transition-transform duration-300
                        ${isOpen ? "rotate-180" : ""}
                      `}
                    />
                  </span>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        height: {
                          duration: 0.3,
                        },
                        opacity: {
                          duration: 0.2,
                        },
                      }}
                    >
                      <div className="relative px-5 pb-6 pl-[4.75rem] pr-6 sm:pl-[5rem]">
                        <div className="h-px bg-gradient-to-r from-emerald-500/25 via-emerald-500/10 to-transparent" />

                        <p className="pt-5 text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-[15px]">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Trust Note */}
        <motion.div
          initial={{
            opacity: 0,
            y: 18,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-60px",
          }}
          transition={{
            duration: 0.55,
            delay: 0.2,
          }}
          className="mx-auto mt-10 max-w-4xl"
        >
          <div
            className="
              group relative overflow-hidden
              rounded-2xl
              border border-emerald-500/15
              bg-emerald-500/[0.035]
              px-5 py-4
              backdrop-blur-xl
              transition-all duration-500
              hover:border-emerald-500/30
              hover:bg-emerald-500/[0.07]
              hover:shadow-lg
              hover:shadow-emerald-500/10
              dark:bg-emerald-500/[0.025]
              dark:hover:bg-emerald-500/[0.06]
            "
          >
            <div className="flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:text-left">
              <div
                className="
                  flex h-9 w-9 shrink-0
                  items-center justify-center
                  rounded-full
                  bg-emerald-500/10
                  text-emerald-500
                  ring-1 ring-emerald-500/15
                "
              >
                <ShieldCheck className="h-4 w-4" />
              </div>

              <p className="text-xs leading-5 text-slate-500 dark:text-slate-400 sm:text-sm">
                Your wellness journey is designed around privacy, supportive
                guidance, and responsible use of AI.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
