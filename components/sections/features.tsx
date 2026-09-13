
"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Brain,
  HeartPulse,
  MoonStar,
  CalendarDays,
  Users,
  ClipboardList,
  ArrowUpRight,
} from "lucide-react";

import Container from "@/components/layout/container";

const features = [
  {
    number: "01",
    title: "Mood Tracking",
    description:
      "Track daily emotions, identify behavioral patterns, and build a clearer understanding of your emotional well-being.",
    icon: HeartPulse,
    label: "Daily Wellness",
  },
  {
    number: "02",
    title: "Sleep Monitoring",
    description:
      "Monitor sleep duration and quality while discovering healthier routines that support better mental performance.",
    icon: MoonStar,
    label: "Healthy Habits",
  },
  {
    number: "03",
    title: "AI Recommendations",
    description:
      "Get personalized wellness insights and practical recommendations powered by intelligent AI-driven analysis.",
    icon: Brain,
    label: "AI Powered",
  },
  {
    number: "04",
    title: "Self Assessment",
    description:
      "Complete guided assessments to understand stress, anxiety, burnout, focus, mood, and overall wellness.",
    icon: ClipboardList,
    label: "Smart Assessment",
  },
  {
    number: "05",
    title: "Counseling & Booking",
    description:
      "Connect with professional support and manage counseling appointments through a simple scheduling experience.",
    icon: CalendarDays,
    label: "Professional Support",
  },
  {
    number: "06",
    title: "Peer Support",
    description:
      "Build meaningful connections, share experiences, and find encouragement within a supportive student community.",
    icon: Users,
    label: "Student Community",
  },
];

export default function Features() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Ambient Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[10%] top-20 h-72 w-72 rounded-full bg-emerald-500/10 blur-[130px]" />
        <div className="absolute right-[10%] top-1/3 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-teal-500/10 blur-[120px]" />
      </div>

      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Built for Student Well-Being
          </div>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
            One Platform for a
            <span className="block bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
              Healthier Mind
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
            PsychoMentalHub brings AI-powered insights, wellness tracking,
            guided assessments, and professional support together in one
            intelligent mental wellness platform.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="mt-20 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.07,
                }}
                className="group relative"
              >
                <div className="relative h-full overflow-hidden rounded-3xl border border-slate-200/70 bg-white/70 p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-emerald-400/40 hover:bg-white dark:border-slate-800/80 dark:bg-slate-900/60 dark:hover:border-emerald-500/30 dark:hover:bg-slate-900/80">
                  {/* Hover Glow */}
                  <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Top Row */}
                  <div className="relative flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 shadow-lg shadow-emerald-500/20 transition-transform duration-500 group-hover:scale-110">
                      <Icon className="h-6 w-6 text-white" />
                    </div>

                    <span className="text-xs font-semibold tracking-[0.2em] text-slate-400 dark:text-slate-600">
                      {feature.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="relative mt-7">
                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                      {feature.label}
                    </span>

                    <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                      {feature.description}
                    </p>
                  </div>

                  {/* Bottom Action */}
                  <Link href="/features" className="relative mt-7 flex items-center justify-between border-t border-slate-200/70 pt-5 dark:border-slate-800">
                    <span className="text-sm font-medium text-slate-500 transition-colors duration-300 group-hover:text-emerald-600 dark:text-slate-500 dark:group-hover:text-emerald-400">
                      Explore feature
                    </span>

                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 transition-all duration-300 group-hover:border-emerald-400 group-hover:bg-emerald-500 group-hover:text-white dark:border-slate-700">
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                    </div>
                  </Link>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-7 right-7 h-px origin-left scale-x-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 transition-transform duration-500 group-hover:scale-x-100" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}  
