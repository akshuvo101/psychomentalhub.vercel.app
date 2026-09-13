
"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Users,
  ClipboardCheck,
  Languages,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/layout/container";

const stats = [
  {
    value: "AI",
    label: "Powered Wellness",
    description:
      "Intelligent guidance and personalized wellness insights designed to support students.",
    icon: Brain,
    category: "Intelligence",
  },
  {
    value: "5",
    label: "User Roles",
    description:
      "Dedicated access experiences for students, counselors, doctors, admins, and super admins.",
    icon: Users,
    category: "Role-Based",
  },
  {
    value: "12",
    label: "Assessment Questions",
    description:
      "A guided assessment experience designed to help students understand their current wellness state.",
    icon: ClipboardCheck,
    category: "Assessment",
  },
  {
    value: "2",
    label: "Languages",
    description:
      "Bangla and English support makes wellness guidance more accessible to a wider student audience.",
    icon: Languages,
    category: "Accessibility",
  },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* =========================================================
          BACKGROUND
      ========================================================== */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-80 w-80 rounded-full bg-emerald-500/10 blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-500/5 blur-[160px]" />
      </div>

      <Container>
        {/* =======================================================
            HEADER
        ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Platform at a Glance
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
            Built to Make Wellness
            <span className="block bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
              More Accessible
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
            PsychomentalHub brings intelligent technology, structured
            assessments, personalized insights, and role-based access together
            in one student-focused wellness platform.
          </p>
        </motion.div>

        {/* =======================================================
            STATS GRID
        ======================================================== */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.article
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/75 p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-emerald-400/50 hover:shadow-2xl hover:shadow-emerald-500/10 dark:border-slate-800 dark:bg-slate-900/70 dark:hover:border-emerald-500/30"
              >
                {/* Hover Glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Top Row */}
                <div className="relative flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 shadow-lg shadow-emerald-500/20 transition-transform duration-500 group-hover:scale-110">
                    <Icon className="h-6 w-6 text-white" />
                  </div>

                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300 dark:text-slate-700">
                    0{index + 1}
                  </span>
                </div>

                {/* Value */}
                <div className="relative mt-7">
                  <h3 className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent">
                    {stat.value}
                  </h3>

                  <p className="mt-2 text-lg font-bold text-slate-900 dark:text-white">
                    {stat.label}
                  </p>

                  <span className="mt-2 inline-block text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    {stat.category}
                  </span>

                  <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
                    {stat.description}
                  </p>
                </div>

                {/* Bottom Accent */}
                <div className="relative mt-7 h-px w-full bg-slate-200 dark:bg-slate-800">
                  <div className="h-px w-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 transition-all duration-500 group-hover:w-full" />
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* =======================================================
            BOTTOM TRUST STRIP
        ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 rounded-3xl border border-slate-200/70 bg-white/60 p-5 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/50"
        >
          <div className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:gap-8">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400">
              <ShieldCheck className="h-5 w-5 text-emerald-500" />
              Role-based access
            </div>

            <div className="hidden h-5 w-px bg-slate-200 dark:bg-slate-800 sm:block" />

            <div className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400">
              <Brain className="h-5 w-5 text-teal-500" />
              AI-assisted wellness
            </div>

            <div className="hidden h-5 w-px bg-slate-200 dark:bg-slate-800 sm:block" />

            <div className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400">
              <ClipboardCheck className="h-5 w-5 text-cyan-500" />
              Structured assessments
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
