
"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Brain,
  Check,
  CheckCircle2,
  ClipboardCheck,
  HeartPulse,
  Lightbulb,
  MessageCircle,
  MoonStar,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  TrendingUp,
  X,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";

type Step = {
  number: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: LucideIcon;
  accent: string;
  glow: string;
  bullets: string[];
};

const steps: Step[] = [
  {
    number: "01",
    title: "Self Awareness",
    shortDescription: "Understand your everyday wellness signals.",
    description:
      "Start by becoming more aware of how you feel and how your daily patterns may affect your overall wellbeing.",
    icon: HeartPulse,
    accent: "from-emerald-400 to-teal-400",
    glow: "bg-emerald-500/20",
    bullets: [
      "Reflect on your current wellbeing",
      "Notice patterns in mood, sleep and daily habits",
      "Build a clearer picture of your wellness",
    ],
  },
  {
    number: "02",
    title: "Wellness Assessment",
    shortDescription: "Turn your answers into meaningful insights.",
    description:
      "A structured wellness assessment helps organize your responses and gives you a clearer starting point for understanding your current state.",
    icon: ClipboardCheck,
    accent: "from-cyan-400 to-blue-400",
    glow: "bg-cyan-500/20",
    bullets: [
      "Answer a guided set of wellness questions",
      "Receive an organized assessment result",
      "Understand areas that may need more attention",
    ],
  },
  {
    number: "03",
    title: "AI Insights",
    shortDescription: "Receive personalized, supportive guidance.",
    description:
      "Your wellness information can be transformed into supportive AI-powered guidance designed to help you better understand your situation and identify useful next steps.",
    icon: Brain,
    accent: "from-violet-400 to-cyan-400",
    glow: "bg-violet-500/20",
    bullets: [
      "Analyze your wellness information",
      "Identify relevant areas such as stress, sleep or focus",
      "Receive personalized guidance and suggestions",
    ],
  },
  {
    number: "04",
    title: "Take Action",
    shortDescription: "Turn insights into healthier daily habits.",
    description:
      "Understanding your wellbeing is only the beginning. Use your insights to make practical changes and gradually build healthier routines.",
    icon: TrendingUp,
    accent: "from-amber-400 to-orange-400",
    glow: "bg-amber-500/20",
    bullets: [
      "Turn insights into practical recommendations",
      "Build healthier daily routines",
      "Track your progress over time",
    ],
  },
  {
    number: "05",
    title: "Get Support",
    shortDescription: "Connect with the right level of support.",
    description:
      "When self-guidance is not enough, PsyChoMentalHub provides pathways toward additional support, including AI guidance and professional care.",
    icon: ShieldCheck,
    accent: "from-rose-400 to-pink-400",
    glow: "bg-rose-500/20",
    bullets: [
      "Continue with supportive AI guidance",
      "Explore professional support when appropriate",
      "Connect with counselors or doctors through the platform",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*                              TYPE-SAFE ICON                                */
/* -------------------------------------------------------------------------- */

function StepIcon({
  icon: Icon,
  className,
}: {
  icon: LucideIcon;
  className: string;
}) {
  return <Icon {...({ className } as React.ComponentProps<LucideIcon>)} />;
}

/* -------------------------------------------------------------------------- */
/*                              ANIMATION VARIANTS                            */
/* -------------------------------------------------------------------------- */

const diagramVariants = {
  hidden: {
    opacity: 0,
    y: 14,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

/* -------------------------------------------------------------------------- */
/*                         STEP 01 — SELF AWARENESS                           */
/* -------------------------------------------------------------------------- */

function SelfAwarenessDiagram() {
  const signals: {
    icon: LucideIcon;
    label: string;
    value: string;
    position: string;
  }[] = [
      {
        icon: Activity,
        label: "Mood",
        value: "How you feel",
        position: "left-1 top-8 sm:left-5",
      },
      {
        icon: MoonStar,
        label: "Sleep",
        value: "Rest patterns",
        position: "right-1 top-8 sm:right-5",
      },
      {
        icon: BarChart3,
        label: "Habits",
        value: "Daily routine",
        position: "bottom-3 left-1/2 -translate-x-1/2",
      },
    ];

  return (
    <motion.div
      variants={diagramVariants}
      initial="hidden"
      animate="visible"
      className="relative mx-auto flex min-h-[280px] w-full max-w-xl items-center justify-center"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.13),transparent_58%)]" />

      {/* Central wellness profile */}
      <motion.div
        animate={{
          scale: [1, 1.035, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-10 flex h-28 w-28 flex-col items-center justify-center rounded-[28px] border border-emerald-400/20 bg-zinc-950/90 shadow-2xl shadow-emerald-950/30 backdrop-blur-xl"
      >
        <div className="absolute inset-0 rounded-[28px] bg-emerald-400/10 blur-2xl" />

        <HeartPulse className="relative h-8 w-8 text-emerald-300" />

        <span className="relative mt-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
          Wellness
        </span>

        <span className="relative text-xs font-medium text-zinc-300">
          Profile
        </span>
      </motion.div>

      {signals.map((item, index) => (
        <motion.div
          key={item.label}
          variants={itemVariants}
          className={`absolute ${item.position} z-20 flex items-center gap-2 rounded-2xl border border-white/10 bg-zinc-950/90 px-3 py-2.5 shadow-xl backdrop-blur-xl`}
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10">
            <StepIcon
              icon={item.icon}
              className="h-4 w-4 text-emerald-300"
            />
          </span>

          <div>
            <p className="text-[11px] font-medium text-zinc-200">
              {item.label}
            </p>
            <p className="mt-0.5 text-[9px] text-zinc-600">
              {item.value}
            </p>
          </div>

          <motion.span
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 1.8,
              delay: index * 0.25,
              repeat: Infinity,
            }}
            className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-emerald-400"
          />
        </motion.div>
      ))}

      {/* Connection pulses */}
      <motion.div
        animate={{
          opacity: [0, 1, 0],
          scaleX: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[25%] top-[43%] h-px w-[18%] bg-gradient-to-r from-emerald-400/0 via-emerald-400/60 to-emerald-400/0"
      />

      <motion.div
        animate={{
          opacity: [0, 1, 0],
          scaleX: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          delay: 0.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[25%] top-[43%] h-px w-[18%] bg-gradient-to-r from-emerald-400/0 via-emerald-400/60 to-emerald-400/0"
      />

      <motion.div
        animate={{
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          delay: 0.8,
          repeat: Infinity,
        }}
        className="absolute bottom-[28%] left-1/2 h-[16%] w-px -translate-x-1/2 bg-gradient-to-b from-emerald-400/50 to-transparent"
      />

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[9px] uppercase tracking-[0.18em] text-zinc-700">
        Observe → Understand
      </div>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*                         STEP 02 — ASSESSMENT                              */
/* -------------------------------------------------------------------------- */

function AssessmentDiagram() {
  const questions = [
    {
      emoji: "🙂",
      text: "How have you been feeling lately?",
      type: "Mood",
      answer: "Feeling okay",
    },
    {
      emoji: "😴",
      text: "How has your sleep been?",
      type: "Sleep",
      answer: "Somewhat tired",
    },
    {
      emoji: "🧠",
      text: "How difficult is it to focus?",
      type: "Focus",
      answer: "A little difficult",
    },
  ];

  return (
    <motion.div
      variants={diagramVariants}
      initial="hidden"
      animate="visible"
      className="relative mx-auto flex min-h-[300px] w-full max-w-xl items-center justify-center"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.13),transparent_58%)]" />

      <div className="relative w-full max-w-md">
        {/* Progress header */}
        <motion.div
          variants={itemVariants}
          className="mb-4 flex items-center justify-between"
        >
          <div className="flex items-center gap-2">
            <ClipboardCheck className="h-4 w-4 text-cyan-300" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
              Wellness Check-in
            </span>
          </div>

          <span className="text-[10px] font-medium text-cyan-300/70">
            3 of 12
          </span>
        </motion.div>

        {/* Progress bar */}
        <div className="mb-4 h-1 overflow-hidden rounded-full bg-white/[0.06]">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "25%" }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-400"
          />
        </div>

        <div className="space-y-2.5">
          {questions.map((question, index) => (
            <motion.div
              key={question.text}
              variants={itemVariants}
              className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-zinc-950/80 p-3.5 shadow-lg backdrop-blur-xl"
            >
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-lg">
                  {question.emoji}
                </span>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[9px] font-medium uppercase tracking-[0.14em] text-cyan-300/60">
                      {question.type}
                    </span>

                    <span className="text-[9px] text-zinc-700">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <p className="mt-1 text-[11px] leading-5 text-zinc-300">
                    {question.text}
                  </p>

                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    <span className="rounded-lg border border-cyan-400/15 bg-cyan-400/[0.05] px-2 py-1 text-[9px] text-cyan-200/80">
                      {question.answer}
                    </span>

                    <span className="rounded-lg border border-white/[0.06] bg-white/[0.025] px-2 py-1 text-[9px] text-zinc-600">
                      Answer selected
                    </span>
                  </div>
                </div>

                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-cyan-300/60" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-3 flex items-center justify-center gap-2 rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.04] px-4 py-2.5"
        >
          <Sparkles className="h-3.5 w-3.5 text-cyan-300" />

          <span className="text-[10px] text-cyan-200/80">
            Your answers build a clearer wellness picture
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*                         STEP 03 — AI INSIGHTS                              */
/* -------------------------------------------------------------------------- */

function AIInsightsDiagram() {
  const insightItems = [
    {
      label: "Stress",
      icon: "🌊",
    },
    {
      label: "Sleep",
      icon: "🌙",
    },
    {
      label: "Focus",
      icon: "🎯",
    },
  ];

  return (
    <motion.div
      variants={diagramVariants}
      initial="hidden"
      animate="visible"
      className="relative mx-auto flex min-h-[300px] w-full max-w-xl items-center justify-center"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15),transparent_58%)]" />

      {/* Input cards */}
      <div className="absolute left-0 top-8 flex flex-col gap-2 sm:left-3">
        <motion.div
          animate={{ x: [0, 6, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="rounded-xl border border-white/10 bg-zinc-950/90 px-3 py-2.5 shadow-xl backdrop-blur-xl"
        >
          <div className="flex items-center gap-2">
            <ClipboardCheck className="h-3.5 w-3.5 text-cyan-300" />
            <span className="text-[10px] text-zinc-300">
              Assessment
            </span>
          </div>
        </motion.div>

        <motion.div
          animate={{ x: [0, 4, 0] }}
          transition={{
            duration: 2.3,
            delay: 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="rounded-xl border border-white/10 bg-zinc-950/90 px-3 py-2.5 shadow-xl backdrop-blur-xl"
        >
          <div className="flex items-center gap-2">
            <HeartPulse className="h-3.5 w-3.5 text-emerald-300" />
            <span className="text-[10px] text-zinc-300">
              Wellness Data
            </span>
          </div>
        </motion.div>
      </div>

      {/* AI Core */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-10 flex h-28 w-28 items-center justify-center rounded-full border border-violet-400/25 bg-violet-400/[0.08] shadow-2xl shadow-violet-950/30"
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.25, 0.65, 0.25],
          }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-[-16px] rounded-full border border-violet-400/15"
        />

        <div className="relative flex flex-col items-center">
          <Brain className="h-9 w-9 text-violet-300" />
          <span className="mt-1 text-[8px] font-semibold uppercase tracking-[0.16em] text-violet-300/70">
            AI Insights
          </span>
        </div>
      </motion.div>

      {/* Output cards */}
      <div className="absolute right-0 top-7 flex flex-col gap-2 sm:right-3">
        {insightItems.map((item, index) => (
          <motion.div
            key={item.label}
            animate={{
              x: [0, -5, 0],
              opacity: [0.65, 1, 0.65],
            }}
            transition={{
              duration: 2,
              delay: index * 0.35,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex items-center gap-2 rounded-xl border border-violet-400/10 bg-zinc-950/90 px-3 py-2.5 shadow-xl backdrop-blur-xl"
          >
            <span className="text-sm">{item.icon}</span>

            <span className="text-[10px] text-zinc-300">
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Data streams */}
      <motion.div
        animate={{
          opacity: [0, 1, 0],
          scaleX: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute left-[25%] top-1/2 h-px w-[18%] bg-gradient-to-r from-violet-400/0 via-violet-400/70 to-violet-400/0"
      />

      <motion.div
        animate={{
          opacity: [0, 1, 0],
          scaleX: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          delay: 0.5,
          repeat: Infinity,
        }}
        className="absolute right-[25%] top-1/2 h-px w-[18%] bg-gradient-to-r from-violet-400/0 via-violet-400/70 to-violet-400/0"
      />

      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 rounded-full border border-violet-400/10 bg-violet-400/[0.04] px-3 py-1.5 text-[9px] text-violet-200/60">
        Understand patterns → Find useful next steps
      </div>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*                         STEP 04 — TAKE ACTION                              */
/* -------------------------------------------------------------------------- */

function ActionDiagram() {
  const actionItems: {
    label: string;
    subtitle: string;
    icon: LucideIcon;
  }[] = [
      {
        label: "Insights",
        subtitle: "Understand",
        icon: Lightbulb,
      },
      {
        label: "Actions",
        subtitle: "Apply",
        icon: CheckCircle2,
      },
      {
        label: "Progress",
        subtitle: "Improve",
        icon: TrendingUp,
      },
    ];

  return (
    <motion.div
      variants={diagramVariants}
      initial="hidden"
      animate="visible"
      className="relative mx-auto flex min-h-[300px] w-full max-w-xl items-center justify-center"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,146,60,0.13),transparent_58%)]" />

      <div className="relative flex items-start gap-2 sm:gap-5">
        {actionItems.map((item, index) => (
          <motion.div
            key={item.label}
            variants={itemVariants}
            className="relative flex flex-col items-center"
          >
            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 2.2,
                delay: index * 0.25,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex h-[72px] w-[72px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-zinc-950/90 shadow-xl backdrop-blur-xl sm:h-20 sm:w-20"
            >
              <StepIcon
                icon={item.icon}
                className="h-6 w-6 text-orange-300"
              />

              <span className="mt-1.5 text-[9px] font-medium text-zinc-300">
                {item.label}
              </span>
            </motion.div>

            <span className="mt-2 text-[9px] text-zinc-600">
              {item.subtitle}
            </span>

            {index < actionItems.length - 1 && (
              <div className="absolute left-[calc(100%+3px)] top-8 flex w-4 items-center sm:left-[calc(100%+7px)] sm:w-7">
                <div className="h-px flex-1 bg-orange-400/20" />

                <ArrowRight className="h-3 w-3 shrink-0 text-orange-300/50" />
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <motion.div
        animate={{
          scale: [1, 1.04, 1],
          opacity: [0.55, 1, 0.55],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-5 rounded-full border border-orange-400/10 bg-orange-400/[0.04] px-4 py-2 text-[10px] text-orange-200/80"
      >
        Small changes → Better habits
      </motion.div>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*                         STEP 05 — GET SUPPORT                              */
/* -------------------------------------------------------------------------- */

function SupportDiagram() {
  return (
    <motion.div
      variants={diagramVariants}
      initial="hidden"
      animate="visible"
      className="relative mx-auto flex min-h-[300px] w-full max-w-xl items-center justify-center"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.13),transparent_58%)]" />

      {/* Central support */}
      <motion.div
        animate={{
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-10 flex h-24 w-24 flex-col items-center justify-center rounded-[26px] border border-rose-400/20 bg-zinc-950/90 shadow-2xl backdrop-blur-xl"
      >
        <ShieldCheck className="h-8 w-8 text-rose-300" />

        <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.15em] text-rose-200/70">
          Support
        </span>
      </motion.div>

      {/* AI */}
      <motion.div
        animate={{ y: [0, -3, 0] }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
        }}
        className="absolute left-0 top-5 flex items-center gap-2 rounded-2xl border border-white/10 bg-zinc-950/90 px-3 py-2.5 shadow-xl backdrop-blur-xl sm:left-5"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-400/10">
          <Sparkles className="h-4 w-4 text-cyan-300" />
        </span>

        <div>
          <p className="text-[10px] font-medium text-zinc-200">
            AI Guidance
          </p>
          <p className="mt-0.5 text-[8px] text-zinc-600">
            Immediate support
          </p>
        </div>
      </motion.div>

      {/* Counselor */}
      <motion.div
        animate={{ y: [0, -3, 0] }}
        transition={{
          duration: 2.2,
          delay: 0.3,
          repeat: Infinity,
        }}
        className="absolute right-0 top-5 flex items-center gap-2 rounded-2xl border border-white/10 bg-zinc-950/90 px-3 py-2.5 shadow-xl backdrop-blur-xl sm:right-5"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-rose-400/10">
          <MessageCircle className="h-4 w-4 text-rose-300" />
        </span>

        <div>
          <p className="text-[10px] font-medium text-zinc-200">
            Counselor
          </p>
          <p className="mt-0.5 text-[8px] text-zinc-600">
            Human support
          </p>
        </div>
      </motion.div>

      {/* Doctor */}
      <motion.div
        animate={{ y: [0, -3, 0] }}
        transition={{
          duration: 2.2,
          delay: 0.6,
          repeat: Infinity,
        }}
        className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-2xl border border-white/10 bg-zinc-950/90 px-3 py-2.5 shadow-xl backdrop-blur-xl"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-400/10">
          <Stethoscope className="h-4 w-4 text-emerald-300" />
        </span>

        <div>
          <p className="text-[10px] font-medium text-zinc-200">
            Doctor
          </p>
          <p className="mt-0.5 text-[8px] text-zinc-600">
            Professional care
          </p>
        </div>
      </motion.div>

      {/* Connection lines */}
      <motion.div
        animate={{ opacity: [0.2, 0.9, 0.2] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute left-[25%] top-[30%] h-px w-[23%] rotate-[17deg] bg-gradient-to-r from-cyan-400/0 via-rose-400/60 to-rose-400/0"
      />

      <motion.div
        animate={{ opacity: [0.2, 0.9, 0.2] }}
        transition={{
          duration: 2,
          delay: 0.4,
          repeat: Infinity,
        }}
        className="absolute right-[25%] top-[30%] h-px w-[23%] -rotate-[17deg] bg-gradient-to-r from-rose-400/0 via-rose-400/60 to-rose-400/0"
      />

      <motion.div
        animate={{ opacity: [0.2, 0.9, 0.2] }}
        transition={{
          duration: 2,
          delay: 0.8,
          repeat: Infinity,
        }}
        className="absolute bottom-[26%] left-1/2 h-[18%] w-px -translate-x-1/2 bg-gradient-to-b from-rose-400/60 to-rose-400/0"
      />
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*                           DIAGRAM SWITCHER                                  */
/* -------------------------------------------------------------------------- */

function StepDiagram({ step }: { step: number }) {
  switch (step) {
    case 0:
      return <SelfAwarenessDiagram />;

    case 1:
      return <AssessmentDiagram />;

    case 2:
      return <AIInsightsDiagram />;

    case 3:
      return <ActionDiagram />;

    case 4:
      return <SupportDiagram />;

    default:
      return null;
  }
}

/* -------------------------------------------------------------------------- */
/*                          MOBILE STEP PREVIEW                               */
/* -------------------------------------------------------------------------- */

function MobileStepPreview({
  step,
  onExplore,
}: {
  step: number;
  onExplore: () => void;
}) {
  const currentStep = steps[step];

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
      className="overflow-hidden"
    >
      <div className="mt-4 border-t border-white/[0.06] pt-4">
        {/* Mini visual */}
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-black/20 p-3">
          <div className="absolute right-3 top-3 flex items-center gap-1.5 text-[8px] uppercase tracking-[0.16em] text-zinc-700">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400/70" />
            Live Preview
          </div>

          <StepDiagram step={step} />
        </div>

        {/* Quick explanation */}
        <div className="mt-4 space-y-2.5">
          {currentStep.bullets.map((bullet) => (
            <div
              key={bullet}
              className="flex items-start gap-2.5 text-[11px] leading-5 text-zinc-500"
            >
              <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-400/10">
                <Check className="h-2.5 w-2.5 text-emerald-300" />
              </span>

              <span>{bullet}</span>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={onExplore}
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-[11px] font-medium text-zinc-300 transition hover:bg-white/[0.08] hover:text-white"
        >
          See how this works
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*                              MAIN COMPONENT                                */
/* -------------------------------------------------------------------------- */

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const currentStep = steps[activeStep];

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-zinc-950 py-24 sm:py-28"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-emerald-500/[0.035] blur-[120px]" />

        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-cyan-500/[0.025] blur-[120px]" />

        <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-violet-500/[0.025] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* ------------------------------------------------------------------ */}
        {/* HEADER                                                             */}
        {/* ------------------------------------------------------------------ */}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/10 bg-emerald-400/5 px-3 py-1.5 text-xs font-medium text-emerald-300">
            <Sparkles className="h-3.5 w-3.5" />
            How It Works
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            From awareness to{" "}
            <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
              meaningful action
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-zinc-400 sm:text-base">
            PsychoMentalHub brings awareness, assessment, AI-powered insights,
            practical action, and human support into one connected wellness
            journey.
          </p>
        </motion.div>

        <div className="mt-14 sm:mt-16">
          {/* ---------------------------------------------------------------- */}
          {/* DESKTOP JOURNEY                                                 */}
          {/* ---------------------------------------------------------------- */}

          <div className="relative hidden lg:block">
            {/* Main journey line */}
            <div className="absolute left-[10%] right-[10%] top-[42px] h-px bg-gradient-to-r from-emerald-400/20 via-cyan-400/30 via-violet-400/30 to-rose-400/20" />

            {/* Moving journey pulse */}
            <motion.div
              animate={{
                left: ["10%", "88%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-[39px] h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.9)]"
            />

            <div className="grid grid-cols-5 gap-4">
              {steps.map((step, index) => {
                const isActive = activeStep === index;

                return (
                  <motion.button
                    key={step.number}
                    type="button"
                    onClick={() => setActiveStep(index)}
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
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    whileHover={{
                      y: -5,
                    }}
                    className="group relative text-left focus:outline-none"
                  >
                    <div className="relative mx-auto mb-6 flex h-[84px] w-[84px] items-center justify-center">
                      <motion.div
                        animate={
                          isActive
                            ? {
                              scale: [1, 1.15, 1],
                              opacity: [0.35, 0.7, 0.35],
                            }
                            : {
                              scale: 1,
                              opacity: 0,
                            }
                        }
                        transition={{
                          duration: 2,
                          repeat: isActive ? Infinity : 0,
                        }}
                        className={`absolute inset-0 rounded-full ${step.glow} blur-xl`}
                      />

                      <div
                        className={`relative flex h-16 w-16 items-center justify-center rounded-full border transition-all duration-300 ${isActive
                          ? "border-white/20 bg-white/[0.08] shadow-xl"
                          : "border-white/10 bg-zinc-900"
                          }`}
                      >
                        <StepIcon
                          icon={step.icon}
                          className={`h-6 w-6 transition-colors ${isActive
                            ? "text-white"
                            : "text-zinc-500"
                            }`}
                        />
                      </div>

                      <span
                        className={`absolute -right-1 -top-1 rounded-full border px-1.5 py-0.5 text-[9px] font-semibold ${isActive
                          ? "border-white/10 bg-zinc-800 text-white"
                          : "border-white/5 bg-zinc-900 text-zinc-600"
                          }`}
                      >
                        {step.number}
                      </span>
                    </div>

                    <div className="text-center">
                      <h3
                        className={`text-sm font-semibold transition-colors ${isActive
                          ? "text-white"
                          : "text-zinc-400"
                          }`}
                      >
                        {step.title}
                      </h3>

                      <p className="mt-2 text-xs leading-5 text-zinc-600 transition-colors group-hover:text-zinc-500">
                        {step.shortDescription}
                      </p>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* MOBILE / TABLET JOURNEY                                          */}
          {/* ---------------------------------------------------------------- */}

          <div className="lg:hidden">
            {/* Progress header */}
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  className={`h-2 w-2 rounded-full ${currentStep.glow}`}
                />

                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-600">
                  Your wellness journey
                </span>
              </div>

              <span className="text-[10px] font-medium text-zinc-600">
                Step {currentStep.number} / 05
              </span>
            </div>

            {/* Progress rail */}
            <div className="mb-5 flex items-center gap-1.5">
              {steps.map((step, index) => {
                const isActive = activeStep === index;
                const isCompleted = index < activeStep;

                return (
                  <button
                    key={step.number}
                    type="button"
                    onClick={() => setActiveStep(index)}
                    aria-label={`Go to step ${step.number}: ${step.title}`}
                    className="group flex flex-1 items-center gap-1.5"
                  >
                    <div
                      className={`h-1.5 flex-1 overflow-hidden rounded-full transition-all duration-300 ${isActive
                        ? "bg-white/20"
                        : isCompleted
                          ? "bg-emerald-400/40"
                          : "bg-white/[0.06]"
                        }`}
                    >
                      {isActive && (
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{
                            duration: 0.8,
                            ease: "easeOut",
                          }}
                          className={`h-full rounded-full bg-gradient-to-r ${step.accent}`}
                        />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Mobile accordion */}
            <div className="space-y-2.5">
              {steps.map((step, index) => {
                const isActive = activeStep === index;

                return (
                  <motion.div
                    key={step.number}
                    layout
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.05,
                    }}
                    className={`relative overflow-hidden rounded-[22px] border transition-all duration-300 ${isActive
                      ? "border-white/[0.11] bg-white/[0.045] shadow-xl shadow-black/20"
                      : "border-white/[0.06] bg-white/[0.018]"
                      }`}
                  >
                    {/* Active accent */}
                    {isActive && (
                      <motion.div
                        layoutId="mobile-active-line"
                        className={`absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b ${step.accent}`}
                      />
                    )}

                    <button
                      type="button"
                      onClick={() => setActiveStep(index)}
                      className="flex w-full items-center gap-3.5 p-4 text-left"
                    >
                      {/* Icon */}
                      <div
                        className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all ${isActive
                          ? step.glow
                          : "bg-white/[0.03]"
                          }`}
                      >
                        <StepIcon
                          icon={step.icon}
                          className={`h-5 w-5 ${isActive
                            ? "text-white"
                            : "text-zinc-600"
                            }`}
                        />

                        {isActive && (
                          <motion.span
                            initial={{
                              scale: 0,
                            }}
                            animate={{
                              scale: 1,
                            }}
                            className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-zinc-950"
                          />
                        )}
                      </div>

                      {/* Text */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-[9px] font-semibold ${isActive
                              ? "text-zinc-500"
                              : "text-zinc-700"
                              }`}
                          >
                            {step.number}
                          </span>

                          <h3
                            className={`text-sm font-semibold ${isActive
                              ? "text-white"
                              : "text-zinc-500"
                              }`}
                          >
                            {step.title}
                          </h3>

                          {isActive && (
                            <span className="rounded-full border border-emerald-400/10 bg-emerald-400/[0.04] px-1.5 py-0.5 text-[7px] font-semibold uppercase tracking-[0.12em] text-emerald-300/70">
                              Active
                            </span>
                          )}
                        </div>

                        <p
                          className={`mt-1 text-[10px] leading-4 ${isActive
                            ? "text-zinc-500"
                            : "text-zinc-700"
                            }`}
                        >
                          {step.shortDescription}
                        </p>
                      </div>

                      {/* Expand indicator */}
                      <motion.div
                        animate={{
                          rotate: isActive ? 90 : 0,
                        }}
                        transition={{
                          duration: 0.25,
                        }}
                        className={`shrink-0 ${isActive
                          ? "text-zinc-300"
                          : "text-zinc-700"
                          }`}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.div>
                    </button>

                    {/* Expanded content */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <MobileStepPreview
                          step={index}
                          onExplore={() => setModalOpen(true)}
                        />
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>


          {/* ---------------------------------------------------------------- */}
          {/* MAIN INTERACTIVE VISUALIZATION                                  */}
          {/* ---------------------------------------------------------------- */}

          <div className="hidden lg:block">
            <motion.div
              layout
              className="mt-10 overflow-hidden rounded-[28px] border border-white/[0.07] bg-white/[0.025] shadow-2xl shadow-black/20"
            >
              <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
                {/* Description */}
                <div className="border-r border-white/[0.06] p-10">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentStep.number}
                      initial={{
                        opacity: 0,
                        x: -12,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      exit={{
                        opacity: 0,
                        x: 12,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${currentStep.accent} text-zinc-950`}
                        >
                          <StepIcon
                            icon={currentStep.icon}
                            className="h-5 w-5"
                          />
                        </span>

                        <div>
                          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-600">
                            Step {currentStep.number}
                          </span>

                          <h3 className="mt-0.5 text-lg font-semibold text-white">
                            {currentStep.title}
                          </h3>
                        </div>
                      </div>

                      <p className="mt-6 text-sm leading-7 text-zinc-400">
                        {currentStep.description}
                      </p>

                      <div className="mt-6 space-y-3">
                        {currentStep.bullets.map((bullet) => (
                          <div
                            key={bullet}
                            className="flex items-start gap-3 text-xs leading-5 text-zinc-500"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400/70" />

                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>

                      <button
                        type="button"
                        onClick={() => setModalOpen(true)}
                        className="mt-7 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-xs font-medium text-zinc-300 transition hover:bg-white/[0.08] hover:text-white"
                      >
                        Explore this step
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Diagram */}
                <div className="relative min-h-[320px] bg-black/10 p-8">
                  <div className="absolute left-5 top-5 flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-zinc-700">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400/70" />
                    System Flow
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentStep.number}
                      initial={{
                        opacity: 0,
                        scale: 0.97,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.97,
                      }}
                      transition={{
                        duration: 0.35,
                      }}
                      className="h-full pt-5"
                    >
                      <StepDiagram step={activeStep} />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* BOTTOM CTA                                                         */}
        {/* ------------------------------------------------------------------ */}

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
          }}
          transition={{
            duration: 0.6,
          }}
          className="mt-14 flex flex-col items-center justify-center gap-4 text-center"
        >
          <div className="flex items-center gap-2 text-xs text-zinc-600">
            <span className="h-px w-8 bg-zinc-800" />

            Your wellness journey starts here

            <span className="h-px w-8 bg-zinc-800" />
          </div>

          <Link
            href="/register"
            className="group inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 shadow-xl shadow-white/5 transition-all hover:-translate-y-0.5 hover:bg-emerald-50"
          >
            Get Started

            <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-zinc-950 text-white transition-transform group-hover:translate-x-0.5">
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        </motion.div>
      </div>

      {/* -------------------------------------------------------------------- */}
      {/* COMPACT DESKTOP MODAL                                               */}
      {/* -------------------------------------------------------------------- */}

      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 backdrop-blur-md"
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 20,
                scale: 0.97,
              }}
              transition={{
                duration: 0.25,
              }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-lg overflow-hidden rounded-[26px] border border-white/10 bg-zinc-950 shadow-2xl shadow-black/50"
            >
              <div
                className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${currentStep.accent}`}
              />

              <button
                type="button"
                onClick={() => setModalOpen(false)}
                aria-label="Close"
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-zinc-500 transition hover:bg-white/[0.08] hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="p-6 sm:p-7">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${currentStep.accent} text-zinc-950`}
                  >
                    <StepIcon
                      icon={currentStep.icon}
                      className="h-5 w-5"
                    />
                  </div>

                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-600">
                      Step {currentStep.number}
                    </span>

                    <h3 className="mt-0.5 text-lg font-semibold text-white">
                      {currentStep.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-7 text-zinc-400">
                  {currentStep.description}
                </p>

                <div className="mt-6 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4">
                  <div className="mb-3 flex items-center gap-2 text-xs font-medium text-zinc-300">
                    <Sparkles className="h-3.5 w-3.5 text-emerald-300" />
                    What happens here
                  </div>

                  <div className="space-y-2.5">
                    {currentStep.bullets.map((bullet) => (
                      <div
                        key={bullet}
                        className="flex items-start gap-2.5 text-xs leading-5 text-zinc-500"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-400/70" />

                        {bullet}
                      </div>
                    ))}
                  </div>
                </div>

                {activeStep === 2 && (
                  <div className="mt-4 rounded-xl border border-amber-400/10 bg-amber-400/[0.03] px-3 py-2.5 text-[11px] leading-5 text-zinc-500">
                    AI guidance is supportive and does not replace
                    professional medical advice or diagnosis.
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="mt-6 w-full rounded-xl bg-white py-2.5 text-xs font-semibold text-zinc-950 transition hover:bg-emerald-50"
                >
                  Continue Exploring
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
