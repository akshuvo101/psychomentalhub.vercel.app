
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  HeartPulse,
  Brain,
  ShieldCheck,
  Users,
  Sparkles,
  Stethoscope,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  MessageCircleHeart,
  LockKeyhole,
  Target,
} from "lucide-react";

export default function AboutPage() {
  const ecosystem = [
    {
      icon: GraduationCap,
      title: "Students",
      description:
        "Complete guided wellness assessments, understand personal patterns, explore AI guidance, and access support when needed.",
    },
    {
      icon: Brain,
      title: "AI Wellness Guidance",
      description:
        "Provides supportive, personalized guidance based on a student's wellness experience and assessment context.",
    },
    {
      icon: Users,
      title: "Counselors",
      description:
        "Enable students to access human support when personalized guidance or professional conversation is needed.",
    },
    {
      icon: Stethoscope,
      title: "Professional Support",
      description:
        "Creates a pathway toward appropriate professional support while keeping AI guidance informational and supportive.",
    },
    {
      icon: ShieldCheck,
      title: "Administrators",
      description:
        "Role-based access helps authorized administrators manage platform workflows and maintain a secure wellness environment.",
    },
  ];

  const roadmap = [
    {
      icon: Brain,
      title: "Smarter AI Guidance",
      description:
        "Continue improving personalized wellness guidance and conversational support.",
    },
    {
      icon: Target,
      title: "Deeper Wellness Insights",
      description:
        "Expand how assessment information can help students understand their wellness patterns.",
    },
    {
      icon: MessageCircleHeart,
      title: "Stronger Support Workflows",
      description:
        "Improve pathways between students, counselors, and appropriate professional support.",
    },
    {
      icon: FileText,
      title: "Enhanced Wellness Reports",
      description:
        "Build richer and more useful assessment summaries and recommendations.",
    },
    {
      icon: ShieldCheck,
      title: "Privacy & Security",
      description:
        "Continue strengthening secure access, permissions, and responsible handling of wellness information.",
    },
    {
      icon: Sparkles,
      title: "Continuous Platform Improvement",
      description:
        "Refine the overall experience based on usability, accessibility, and student needs.",
    },
  ];

  return (
    <main className="overflow-hidden bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.08] via-teal-500/[0.06] to-cyan-500/[0.08]" />

        <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="absolute -right-32 top-40 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative container mx-auto px-6 py-24 lg:py-32">
          <div className="mx-auto max-w-5xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-600 dark:text-emerald-400"
            >
              <HeartPulse className="h-4 w-4" />
              PsychoMentalHub
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl"
            >
              Supporting Student Wellness Through{" "}
              <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                AI & Technology
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="mx-auto mt-8 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg lg:text-xl"
            >
              PsychoMentalHub is a student-focused wellness platform that
              combines guided self-assessment, AI-powered insights, practical
              recommendations, and access to human support in one thoughtful
              digital experience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Link
                href="/register"
                className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-4 font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-emerald-500/25"
              >
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="rounded-2xl border border-slate-200 bg-white/70 px-8 py-4 font-semibold text-slate-700 backdrop-blur-sm transition-all duration-300 hover:border-emerald-400/50 hover:bg-emerald-50/70 hover:text-emerald-600 dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-200 dark:hover:border-emerald-500/30 dark:hover:bg-emerald-950/20 dark:hover:text-emerald-400"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="relative py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <span className="font-semibold uppercase tracking-[0.18em] text-emerald-500">
              Our Story
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Why PsychoMentalHub Was Created
            </h2>

            <p className="mt-8 text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
              Student life can bring academic pressure, changing routines,
              stress, sleep challenges, difficulty focusing, and many other
              everyday wellness concerns. Yet understanding how these
              experiences affect us is not always easy.
            </p>

            <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
              PsychoMentalHub was created to make that first step easier. The
              platform brings together structured wellness assessment,
              understandable insights, supportive AI guidance, practical
              recommendations, and pathways toward human support.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="relative py-24">
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-[36px] bg-emerald-500/10 blur-2xl" />

              <Image
                src="/images/mission.jpg"
                alt="PsychoMentalHub mission"
                width={800}
                height={600}
                className="relative rounded-[32px] object-cover shadow-2xl shadow-emerald-500/10"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <span className="font-semibold uppercase tracking-[0.18em] text-emerald-500">
                Our Mission
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Making Student Wellness Easier to Understand
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
                Our mission is to give students a simple and supportive way
                to reflect on their wellbeing, understand their assessment
                results, and discover practical next steps.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
                PsychoMentalHub is designed to complement—not replace—
                professional care by helping students become more aware of
                their wellbeing and connect with appropriate support when
                needed.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  "Guided wellness self-assessment",
                  "Personalized AI-powered insights",
                  "Practical recommendations and support pathways",
                  "Structured wellness reports",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" />
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="relative overflow-hidden bg-slate-50 py-24 dark:bg-slate-900/40">
        <div className="absolute left-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-3xl" />

        <div className="relative container mx-auto px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="order-2 lg:order-1"
            >
              <span className="font-semibold uppercase tracking-[0.18em] text-cyan-500">
                Our Vision
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                A More Thoughtful Future for Digital Student Wellness
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
                We envision digital wellness tools that feel approachable,
                responsible, and genuinely useful—helping students better
                understand themselves without making technology feel
                impersonal.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
                By combining structured information with responsible AI and
                human support pathways, PsychoMentalHub aims to make wellness
                awareness a more natural part of student life.
              </p>

              <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 px-5 py-4">
                <Sparkles className="h-5 w-5 text-cyan-500" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Technology that supports awareness, reflection, and action.
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="relative order-1 lg:order-2"
            >
              <div className="absolute -inset-4 rounded-[36px] bg-cyan-500/10 blur-2xl" />

              <Image
                src="/images/vision.jpg"
                alt="PsychoMentalHub vision"
                width={800}
                height={600}
                className="relative rounded-[32px] object-cover shadow-2xl shadow-cyan-500/10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* PLATFORM ECOSYSTEM */}
      <section className="relative py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-semibold uppercase tracking-[0.18em] text-emerald-500">
              Platform Ecosystem
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Designed Around the Student Wellness Journey
            </h2>

            <p className="mt-5 text-slate-600 dark:text-slate-400">
              PsychoMentalHub connects assessment, insights, guidance, and
              appropriate support within one role-based platform.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">
            {ecosystem.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/50 hover:bg-emerald-50/60 hover:shadow-xl hover:shadow-emerald-500/10 dark:border-slate-800 dark:bg-slate-950 dark:hover:border-emerald-500/30 dark:hover:bg-emerald-950/20"
                >
                  <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-emerald-500/5 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/20 transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-7 w-7" />
                    </div>

                    <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT CONNECTS */}
      <section className="relative overflow-hidden bg-slate-50 py-24 dark:bg-slate-900/40">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-semibold uppercase tracking-[0.18em] text-emerald-500">
              The Experience
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              From Reflection to the Next Step
            </h2>

            <p className="mt-5 text-slate-600 dark:text-slate-400">
              The platform is structured to make the wellness journey easier
              to follow and understand.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-4">
            {[
              {
                icon: ClipboardCheck,
                number: "01",
                title: "Assess",
                text: "Reflect through a structured wellness assessment.",
              },
              {
                icon: Brain,
                number: "02",
                title: "Understand",
                text: "Explore your wellness result and personalized insights.",
              },
              {
                icon: Sparkles,
                number: "03",
                title: "Act",
                text: "Use practical recommendations to identify your next step.",
              },
              {
                icon: MessageCircleHeart,
                number: "04",
                title: "Connect",
                text: "Access appropriate guidance and human support when needed.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="relative rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="text-sm font-bold text-emerald-500/50">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRIVACY & RESPONSIBLE AI */}
      <section className="relative py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-[32px] border border-emerald-500/20 bg-gradient-to-br from-emerald-500/[0.08] via-teal-500/[0.05] to-cyan-500/[0.08] p-8 sm:p-10 lg:p-12">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-500">
                  <ShieldCheck className="h-6 w-6" />
                </div>

                <h2 className="mt-5 text-3xl font-bold tracking-tight">
                  Built With Privacy and Responsibility in Mind
                </h2>

                <p className="mt-5 max-w-2xl leading-7 text-slate-600 dark:text-slate-400">
                  PsychoMentalHub uses authenticated access, role-based
                  permissions, and database-level security policies to help
                  protect wellness information. AI guidance is intended to be
                  supportive and informational, not a replacement for
                  qualified professional mental healthcare.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 lg:max-w-xs lg:justify-end">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-white/70 px-4 py-2 text-sm font-medium dark:bg-slate-950/50">
                  <LockKeyhole className="h-4 w-4 text-emerald-500" />
                  Secure Access
                </div>

                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-white/70 px-4 py-2 text-sm font-medium dark:bg-slate-950/50">
                  <ShieldCheck className="h-4 w-4 text-emerald-500" />
                  Role-Based Security
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="relative overflow-hidden bg-slate-50 py-24 dark:bg-slate-900/40">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-semibold uppercase tracking-[0.18em] text-emerald-500">
              Future Direction
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Where PsychoMentalHub Can Go Next
            </h2>

            <p className="mt-5 text-slate-600 dark:text-slate-400">
              The platform can continue evolving through better AI guidance,
              richer insights, stronger support workflows, and improved
              student experiences.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-5xl gap-4 md:grid-cols-2">
            {roadmap.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="group flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400/50 hover:bg-emerald-50/60 hover:shadow-lg hover:shadow-emerald-500/10 dark:border-slate-800 dark:bg-slate-950 dark:hover:border-emerald-500/30 dark:hover:bg-emerald-950/20"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500 transition-colors duration-300 group-hover:bg-emerald-500 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="font-semibold transition-colors duration-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                      {item.title}
                    </h3>

                    <p className="mt-1.5 text-sm leading-6 text-slate-600 dark:text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24">
        <div className="container mx-auto px-6">
          <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 px-6 py-14 text-center text-white shadow-2xl shadow-emerald-500/20 sm:px-10 lg:px-16">
            {/* Decorative glow */}
            <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-32 -right-20 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />

            <div className="relative">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm">
                <Sparkles className="h-7 w-7" />
              </div>

              <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
                Start Understanding Your Wellness
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
                Take a guided assessment, explore your wellness insights, and
                discover practical next steps with PsychoMentalHub.
              </p>

              <Link
                href="/register"
                className="group mt-8 inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-semibold text-emerald-600 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              >
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-white/75">
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4" />
                  Guided Assessment
                </span>

                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4" />
                  AI Insights
                </span>

                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4" />
                  Support Pathways
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
