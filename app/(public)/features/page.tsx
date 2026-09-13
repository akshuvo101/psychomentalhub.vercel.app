
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Brain,
  HeartPulse,
  Moon,
  Activity,
  ClipboardCheck,
  CalendarDays,
  MessageSquare,
  BarChart3,
  ShieldCheck,
  Users,
  Stethoscope,
  UserCog,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Bot,
  LockKeyhole,
  Languages,
  FileText,
  UserRoundCheck,
  Lightbulb,
} from "lucide-react";

const features = [
  {
    title: "AI Wellness Assistant",
    description:
      "Get intelligent wellness guidance, personalized recommendations, and supportive conversations powered by AI.",
    icon: Brain,
    category: "AI-Powered",
    featured: true,
  },
  {
    title: "Mood Tracking",
    description:
      "Record your emotional state and understand patterns that can help you become more aware of your well-being.",
    icon: HeartPulse,
    category: "Wellness Tracking",
  },
  {
    title: "Sleep Tracking",
    description:
      "Monitor sleep duration and quality while building healthier routines that support better daily performance.",
    icon: Moon,
    category: "Healthy Lifestyle",
  },
  {
    title: "Habit Tracking",
    description:
      "Build consistent routines by keeping track of positive daily habits and maintaining meaningful wellness goals.",
    icon: Activity,
    category: "Daily Habits",
  },
  {
    title: "Wellness Assessments",
    description:
      "Complete guided assessments to better understand stress, mood, anxiety, burnout, focus, and overall wellness.",
    icon: ClipboardCheck,
    category: "Self Assessment",
  },
  {
    title: "Appointments",
    description:
      "Manage counseling and wellness appointments through a streamlined scheduling experience designed for students.",
    icon: CalendarDays,
    category: "Professional Support",
  },
  {
    title: "Community Forum",
    description:
      "Connect with peers, share experiences, exchange encouragement, and become part of a supportive community.",
    icon: MessageSquare,
    category: "Peer Support",
  },
  {
    title: "Reports & Analytics",
    description:
      "Turn wellness activity into meaningful insights with structured reports and progress-focused analytics.",
    icon: BarChart3,
    category: "Insights",
  },
];

const roles = [
  {
    title: "Students",
    description:
      "Access assessments, wellness tools, AI guidance, personal insights, and support resources from one dashboard.",
    icon: Users,
    number: "01",
  },
  {
    title: "Counselors",
    description:
      "Support students through structured counseling workflows, appointments, and wellness-related information.",
    icon: HeartPulse,
    number: "02",
  },
  {
    title: "Doctors",
    description:
      "Access the tools and information required to support student health and wellness within the platform.",
    icon: Stethoscope,
    number: "03",
  },
  {
    title: "Administrators",
    description:
      "Manage users, platform operations, content, and system-level activities through administrative controls.",
    icon: UserCog,
    number: "04",
  },
  {
    title: "Super Admins",
    description:
      "Maintain centralized control over platform configuration, access management, and administrative operations.",
    icon: ShieldCheck,
    number: "05",
  },
];

const highlights = [
  {
    title: "AI-Powered Guidance",
    description:
      "Intelligent recommendations designed to provide relevant and personalized wellness support.",
    icon: Bot,
  },
  {
    title: "Privacy & Access Control",
    description:
      "Role-based access helps ensure users interact only with the information and tools relevant to them.",
    icon: LockKeyhole,
  },
  {
    title: "Bilingual Experience",
    description:
      "Support for both Bangla and English helps make the platform more accessible to students.",
    icon: Languages,
  },
  {
    title: "Personalized Reports",
    description:
      "Assessment results are transformed into structured insights that are easier to understand and act upon.",
    icon: FileText,
  },
];

export default function FeaturesPage() {
  return (
    <main className="overflow-hidden bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative isolate min-h-[720px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/features-hero.jpg"
            alt="PsychomentalHub wellness platform"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Overlays */}
        <div className="absolute inset-0 -z-10 bg-slate-950/80" />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-emerald-950/90 via-slate-950/80 to-cyan-950/70" />

        {/* Ambient Glows */}
        <div className="absolute -left-32 top-20 -z-10 h-80 w-80 rounded-full bg-emerald-500/20 blur-[130px]" />
        <div className="absolute -right-32 bottom-10 -z-10 h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]" />

        <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-center px-6 py-28 lg:px-8">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-emerald-300 shadow-lg backdrop-blur-xl">
                <Sparkles className="h-4 w-4" />
                Explore PsychomentalHub
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-7 max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              A Smarter Way to Support
              <span className="block bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                Student Mental Wellness
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-7 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg"
            >
              PsychomentalHub brings AI-powered wellness guidance,
              self-assessments, personalized insights, and professional
              support together in one secure and student-focused platform.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="/register"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 px-7 py-3.5 font-semibold text-white shadow-xl shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-500/30"
              >
                Get Started
                <ArrowRight className="h-5 w-5" />
              </Link>

              <a
                href="#core-features"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/15"
              >
                Explore Features
              </a>
            </motion.div>

            {/* Hero Trust Points */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-300"
            >
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                AI-powered insights
              </span>

              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                Guided assessments
              </span>

              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                Role-based access
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================== */}
      <section className="relative py-24 lg:py-28">
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />

        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
            More Than a Wellness App
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Designed Around the
            <span className="block bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
              Student Wellness Journey
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
            PsychomentalHub connects self-awareness, intelligent guidance,
            healthy habits, and professional support into a single digital
            experience.
          </p>
        </div>
      </section>

      {/* =========================================================
          CORE FEATURES
      ========================================================== */}
      <section
        id="core-features"
        className="relative scroll-mt-20 border-y border-slate-200/70 bg-white py-24 dark:border-slate-800/70 dark:bg-slate-900/40 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                Core Capabilities
              </span>

              <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                Everything in One
                <span className="block text-emerald-500">
                  Wellness Platform
                </span>
              </h2>
            </div>

            <p className="max-w-xl text-base leading-7 text-slate-600 dark:text-slate-400">
              From AI-assisted guidance to structured assessments and
              professional support, each feature is designed to make wellness
              management simpler and more meaningful.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.article
                  key={feature.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                  className={`group relative overflow-hidden rounded-3xl border p-7 transition-all duration-500 ${
                    feature.featured
                      ? "border-emerald-400/40 bg-gradient-to-br from-emerald-50 via-white to-cyan-50 shadow-xl shadow-emerald-500/10 dark:border-emerald-500/30 dark:from-emerald-950/40 dark:via-slate-900 dark:to-cyan-950/30"
                      : "border-slate-200/80 bg-slate-50/80 hover:-translate-y-2 hover:border-emerald-300/70 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-900/70 dark:hover:border-emerald-500/30 dark:hover:bg-slate-900"
                  }`}
                >
                  {/* Glow */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {feature.featured && (
                    <div className="absolute right-5 top-5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                      Featured
                    </div>
                  )}

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 shadow-lg shadow-emerald-500/20 transition-transform duration-500 group-hover:scale-110">
                        <Icon className="h-7 w-7 text-white" />
                      </div>

                      <span className="text-xs font-semibold tracking-[0.18em] text-slate-300 dark:text-slate-700">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="mt-7">
                      <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                        {feature.category}
                      </span>

                      <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
                        {feature.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                        {feature.description}
                      </p>
                    </div>

                    <div className="mt-7 h-px w-full bg-slate-200 dark:bg-slate-800">
                      <div className="h-px w-0 bg-gradient-to-r from-emerald-500 to-cyan-500 transition-all duration-500 group-hover:w-full" />
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          HOW IT WORKS
      ========================================================== */}
      <section className="relative overflow-hidden py-24 lg:py-28">
        <div className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-[130px]" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-teal-500/20 bg-teal-500/10 px-4 py-2 text-sm font-medium text-teal-600 dark:text-teal-400">
              Simple by Design
            </span>

            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              A Clear Path to
              <span className="block bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
                Better Self-Awareness
              </span>
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
              PsychomentalHub makes wellness support easier by connecting
              assessment, insight, action, and ongoing support.
            </p>
          </div>

          <div className="relative mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Understand",
                description:
                  "Complete guided assessments and reflect on your current wellness state.",
                icon: ClipboardCheck,
              },
              {
                number: "02",
                title: "Discover",
                description:
                  "Explore personalized insights and identify patterns affecting your well-being.",
                icon: Lightbulb,
              },
              {
                number: "03",
                title: "Improve",
                description:
                  "Follow practical recommendations and build healthier habits over time.",
                icon: Activity,
              },
              {
                number: "04",
                title: "Get Support",
                description:
                  "Access AI guidance and connect with professional support when needed.",
                icon: UserRoundCheck,
              },
            ].map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="relative"
                >
                  <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                        <Icon className="h-6 w-6" />
                      </div>

                      <span className="text-3xl font-bold text-slate-100 dark:text-slate-800">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="mt-6 text-xl font-bold">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          ROLES
      ========================================================== */}
      <section className="relative bg-slate-900 py-24 text-white dark:bg-black lg:py-28">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-[130px]" />
          <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-cyan-500/10 blur-[130px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-emerald-300">
              Role-Based Platform
            </span>

            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              Built for Every
              <span className="block text-emerald-400">
                Role in the Ecosystem
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              Different users need different tools. PsychomentalHube uses
              role-based access to create focused experiences for students,
              professionals, and platform administrators.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {roles.map((role, index) => {
              const Icon = role.icon;

              return (
                <motion.div
                  key={role.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:bg-white/[0.07]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10">
                      <Icon className="h-6 w-6 text-emerald-400" />
                    </div>

                    <span className="text-xs font-semibold tracking-[0.2em] text-slate-600">
                      {role.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-bold">{role.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {role.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          PLATFORM HIGHLIGHTS
      ========================================================== */}
      <section className="py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-600 dark:text-cyan-400">
                Why PsychomentalHub
              </span>

              <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                Technology That Supports
                <span className="block bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
                  Meaningful Wellness
                </span>
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-400">
                The platform combines intelligent technology with a
                human-centered approach to make mental wellness tools more
                accessible, structured, and actionable.
              </p>

              <div className="mt-8 flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                Designed with students at the center
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.08,
                    }}
                    className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:border-emerald-500/30"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/10">
                      <Icon className="h-6 w-6 text-emerald-500 transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    <h3 className="mt-5 text-lg font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================== */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600" />

        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-white/10 blur-[100px]" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-[100px]" />

        <div className="relative mx-auto max-w-4xl px-6 text-center text-white">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md">
            <Brain className="h-8 w-8" />
          </div>

          <h2 className="mt-7 text-4xl font-bold tracking-tight sm:text-5xl">
            Take the First Step Toward
            <span className="block text-emerald-100">
              Better Mental Wellness
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
            Explore PsychomentalHub and discover a smarter, more connected
            approach to student wellness.
          </p>

          <Link
            href="/register"
            className="mt-9 inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-semibold text-emerald-700 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            Get Started with PsychomentalHube
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
