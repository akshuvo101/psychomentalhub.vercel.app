
"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Heart,
  Moon,
  Quote,
  Sparkles,
  Star,
  Target,
} from "lucide-react";

import Container from "@/components/layout/container";

const perspectives = [
  {
    name: "Student Perspective",
    role: "Self-awareness",
    icon: Brain,
    accent: "emerald",
    content:
      "A simple assessment can make everyday wellness patterns easier to notice and understand.",
    tags: ["Mood", "Stress", "Self-awareness"],
  },
  {
    name: "Student Perspective",
    role: "Personalized guidance",
    icon: Sparkles,
    accent: "teal",
    content:
      "Personalized AI guidance can turn wellness insights into practical steps that feel easier to follow.",
    tags: ["AI Insights", "Guidance", "Next Steps"],
  },
  {
    name: "Student Perspective",
    role: "Healthy habits",
    icon: Heart,
    accent: "cyan",
    content:
      "Tracking areas like sleep, focus, and daily habits can help students build a more intentional wellness routine.",
    tags: ["Sleep", "Focus", "Daily Habits"],
  },
];

const accentStyles = {
  emerald: {
    icon: "bg-emerald-500/10 text-emerald-500 ring-emerald-500/20",
    glow: "group-hover:bg-emerald-500/10",
    border: "group-hover:border-emerald-400/40",
    tag: "border-emerald-500/15 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400",
  },
  teal: {
    icon: "bg-teal-500/10 text-teal-500 ring-teal-500/20",
    glow: "group-hover:bg-teal-500/10",
    border: "group-hover:border-teal-400/40",
    tag: "border-teal-500/15 bg-teal-500/5 text-teal-600 dark:text-teal-400",
  },
  cyan: {
    icon: "bg-cyan-500/10 text-cyan-500 ring-cyan-500/20",
    glow: "group-hover:bg-cyan-500/10",
    border: "group-hover:border-cyan-400/40",
    tag: "border-cyan-500/15 bg-cyan-500/5 text-cyan-600 dark:text-cyan-400",
  },
} as const;

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[10%] top-20 h-72 w-72 rounded-full bg-emerald-500/8 blur-[120px]" />
        <div className="absolute right-[10%] top-1/3 h-80 w-80 rounded-full bg-cyan-500/8 blur-[130px]" />
        <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-teal-500/5 blur-[110px]" />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
      </div>

      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/8 px-4 py-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">
            <Sparkles className="h-4 w-4" />
            Student Perspectives
          </div>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Designed Around the
            <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
              {" "}
              Student Experience
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400 sm:text-lg">
            PsychoMentalHub brings self-awareness, personalized guidance, and
            practical wellness support into one focused experience.
          </p>
        </motion.div>

        {/* Perspective Cards */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {perspectives.map((item, index) => {
            const Icon = item.icon;
            const styles = accentStyles[item.accent as keyof typeof accentStyles];

            return (
              <motion.article
                key={`${item.role}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                }}
                className={`group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/75 p-7 shadow-xl shadow-slate-200/30 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-800/80 dark:bg-slate-900/65 ${styles.border}`}
              >
                {/* Hover Glow */}
                <div
                  className={`pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full blur-3xl transition-opacity duration-500 opacity-0 ${styles.glow} group-hover:opacity-100`}
                />

                {/* Top Row */}
                <div className="relative flex items-start justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ring-1 ${styles.icon}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-3.5 w-3.5 fill-emerald-500 text-emerald-500"
                      />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <div className="relative mt-7">
                  <Quote className="absolute -left-1 -top-2 h-8 w-8 text-emerald-500/10" />

                  <p className="relative text-[15px] leading-7 text-slate-600 dark:text-slate-300">
                    “{item.content}”
                  </p>
                </div>

                {/* Divider */}
                <div className="my-7 h-px bg-gradient-to-r from-slate-200 via-slate-200/60 to-transparent dark:from-slate-800 dark:via-slate-800/60" />

                {/* Profile */}
                <div className="relative flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${styles.icon}`}
                  >
                    <Icon className="h-4 w-4" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      {item.name}
                    </p>
                    <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-500">
                      {item.role}
                    </p>
                  </div>
                </div>

                {/* Tags */}
                <div className="relative mt-6 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-full border px-2.5 py-1 text-[11px] font-medium ${styles.tag}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom Experience Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-10 max-w-4xl"
        >
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/60 p-6 shadow-lg shadow-slate-200/20 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/50 sm:p-7">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-emerald-500/[0.03] via-teal-500/[0.05] to-cyan-500/[0.03]" />

            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              {/* Left */}
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 text-emerald-500 ring-1 ring-emerald-500/15">
                  <Target className="h-5 w-5" />
                </div>

                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    A more intentional wellness journey
                  </p>

                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Understand → Reflect → Act → Get support
                  </p>
                </div>
              </div>

              {/* Right */}
              <div className="flex items-center gap-5 sm:pl-6">
                <div className="hidden h-10 w-px bg-slate-200 dark:bg-slate-800 sm:block" />

                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <Moon className="h-4 w-4 text-cyan-500" />
                  <span>Built for everyday student wellness</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
