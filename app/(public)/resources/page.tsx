
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  CheckCircle2,
  FileText,
  HeartPulse,
  Lock,
  MessageCircleHeart,
  Moon,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";

import Container from "@/components/layout/container";

const categories = [
  {
    title: "Mental Wellbeing",
    description:
      "Explore practical ways to understand emotions, manage everyday stress, and build healthier mental habits.",
    icon: Brain,
  },
  {
    title: "Healthy Habits",
    description:
      "Discover simple approaches to creating balanced routines that support everyday student wellbeing.",
    icon: HeartPulse,
  },
  {
    title: "Sleep & Recovery",
    description:
      "Learn why healthy sleep matters and how better rest can support mood, focus, and daily performance.",
    icon: Moon,
  },
  {
    title: "Student Balance",
    description:
      "Find practical ideas for managing academic pressure, focus, routines, and personal wellbeing.",
    icon: Target,
  },
];

const resources = [
  {
    title: "Understanding Your Wellbeing",
    image: "/images/resources/mental-health.jpg",
    description:
      "Build a clearer understanding of emotional wellbeing and recognize everyday patterns that may affect how you feel.",
    icon: Brain,
  },
  {
    title: "A Healthier Student Routine",
    image: "/images/resources/student-wellness.jpg",
    description:
      "Explore practical habits around sleep, focus, stress management, and daily routines that support a balanced student life.",
    icon: HeartPulse,
  },
  {
    title: "When Human Support Matters",
    image: "/images/resources/counselor-support.jpg",
    description:
      "Understand when personalized guidance may not be enough and why reaching out to a qualified professional can be an important next step.",
    icon: MessageCircleHeart,
  },
];

const toolkitItems = [
  {
    icon: FileText,
    title: "Wellness Assessment",
    description:
      "Reflect on your current wellbeing through a structured 12-question assessment covering areas such as mood, sleep, stress, and focus.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Insights",
    description:
      "Receive supportive, personalized guidance based on your wellness experience and assessment results.",
  },
  {
    icon: ShieldCheck,
    title: "Structured Wellness Report",
    description:
      "Review your assessment outcome, wellness state, confidence level, and recommendations in a structured report.",
  },
];

export default function ResourcesPage() {
  return (
    <main className="bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative mt-20 min-h-[650px] overflow-hidden">
        <Image
          src="/images/resources/hero.jpg"
          alt="PsychoMentalHub wellness resources"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-950/70" />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-slate-950/30" />

        {/* Green glow */}
        <div className="pointer-events-none absolute -left-24 top-1/4 h-96 w-96 rounded-full bg-emerald-500/20 blur-[130px]" />

        <div className="relative z-10 mx-auto flex min-h-[650px] max-w-7xl items-center px-6 py-24">
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="max-w-3xl"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300 backdrop-blur-md">
              <Sparkles className="h-4 w-4" />
              Wellness Resource Library
            </div>

            {/* Heading */}
            <h1 className="mt-7 text-5xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl md:text-7xl">
              Knowledge That
              <span className="block bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                Supports You
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-base leading-7 text-slate-200/85 sm:text-lg sm:leading-8">
              Explore practical wellness guidance designed to help students
              understand their wellbeing, build healthier habits, and take
              meaningful next steps with PsychoMentalHub.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/register"
                className="
                  group inline-flex items-center justify-center gap-2
                  rounded-2xl
                  bg-emerald-500
                  px-7 py-4
                  text-sm font-bold text-white
                  shadow-xl shadow-emerald-950/30
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-emerald-400
                  hover:shadow-2xl hover:shadow-emerald-500/25
                "
              >
                Start Your Assessment

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/features"
                className="
                  inline-flex items-center justify-center
                  rounded-2xl
                  border border-white/20
                  bg-white/10
                  px-7 py-4
                  text-sm font-semibold text-white
                  backdrop-blur-md
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-emerald-300/40
                  hover:bg-emerald-500/15
                "
              >
                Explore PsychoMentalHub
              </Link>
            </div>

            {/* Hero highlights */}
            <div className="mt-10 flex flex-wrap gap-3">
              {[
                "Mental wellbeing",
                "Healthy habits",
                "Student support",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-3.5 py-2 text-xs text-white/75 backdrop-blur-md"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          CATEGORIES
      ========================================================= */}
      <section className="relative overflow-hidden py-24 sm:py-28">
        <div className="pointer-events-none absolute left-0 top-20 h-80 w-80 rounded-full bg-emerald-500/6 blur-[130px]" />

        <Container>
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
              duration: 0.6,
            }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/8 px-4 py-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">
              <Brain className="h-4 w-4" />
              Explore Topics
            </div>

            <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Resources for Your
              <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                {" "}
                Wellness Journey
              </span>
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-400 sm:text-lg">
              Explore different areas of wellbeing and discover practical
              knowledge you can apply to everyday student life.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {categories.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 25,
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
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="
                    group relative overflow-hidden
                    rounded-3xl
                    border border-slate-200/70
                    bg-white/75
                    p-7
                    shadow-lg shadow-slate-200/25
                    backdrop-blur-xl
                    transition-all duration-500
                    hover:-translate-y-2
                    hover:border-emerald-400/40
                    hover:bg-emerald-50/70
                    hover:shadow-2xl
                    hover:shadow-emerald-500/10
                    dark:border-slate-800
                    dark:bg-slate-900/65
                    dark:hover:border-emerald-500/30
                    dark:hover:bg-emerald-950/20
                  "
                >
                  {/* Hover glow */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-emerald-500/0 blur-3xl transition-all duration-700 group-hover:bg-emerald-500/15" />

                  <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-500 ring-1 ring-emerald-500/15 transition-all duration-500 group-hover:bg-emerald-500/15 group-hover:ring-emerald-500/25">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="mt-6 text-xl font-bold text-slate-900 transition-colors group-hover:text-emerald-700 dark:text-white dark:group-hover:text-emerald-300">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* =========================================================
          FEATURED RESOURCES
      ========================================================= */}
      <section className="relative overflow-hidden bg-slate-50/80 py-24 dark:bg-slate-900/40 sm:py-28">
        <div className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-cyan-500/6 blur-[130px]" />

        <Container>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <motion.div
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/8 px-4 py-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                <BookOpenIcon />
                Featured Guidance
              </div>

              <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Learn. Reflect.
                <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
                  {" "}
                  Grow.
                </span>
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-400">
                Helpful perspectives for understanding your wellbeing and
                making more intentional everyday choices.
              </p>
            </motion.div>
          </div>

          <div className="mt-14 grid gap-7 lg:grid-cols-3">
            {resources.map((resource, index) => {
              const Icon = resource.icon;

              return (
                <motion.article
                  key={resource.title}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "-70px",
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.1,
                  }}
                  className="
                    group overflow-hidden
                    rounded-3xl
                    border border-slate-200/70
                    bg-white
                    shadow-xl shadow-slate-200/20
                    transition-all duration-500
                    hover:-translate-y-2
                    hover:border-emerald-400/35
                    hover:shadow-2xl
                    hover:shadow-emerald-500/10
                    dark:border-slate-800
                    dark:bg-slate-900/75
                  "
                >
                  {/* Image */}
                  <div className="relative h-60 overflow-hidden">
                    <Image
                      src={resource.image}
                      alt={resource.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

                    <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white backdrop-blur-md">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-7">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {resource.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                      {resource.description}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                      Wellness guidance
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* =========================================================
          WELLNESS TOOLKIT
      ========================================================= */}
      <section className="relative overflow-hidden py-24 sm:py-28">
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-500/6 blur-[130px]" />

        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Image */}
            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                margin: "-80px",
              }}
              transition={{
                duration: 0.65,
              }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10 blur-2xl" />

              <div className="relative overflow-hidden rounded-3xl border border-slate-200/70 shadow-2xl shadow-slate-200/30 dark:border-slate-800 dark:shadow-black/20">
                <Image
                  src="/images/resources/toolkit.jpg"
                  alt="PsychoMentalHub wellness toolkit"
                  width={700}
                  height={500}
                  className="h-auto w-full object-cover transition duration-700 hover:scale-[1.02]"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{
                opacity: 0,
                x: 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                margin: "-80px",
              }}
              transition={{
                duration: 0.65,
              }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/8 px-4 py-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                <Sparkles className="h-4 w-4" />
                Your Wellness Toolkit
              </div>

              <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Tools That Turn
                <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                  {" "}
                  Awareness Into Action
                </span>
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-400 sm:text-lg">
                PsychoMentalHub combines guided assessment, AI-powered
                reflection, and structured reporting to help students make
                sense of their wellness experience.
              </p>

              <div className="mt-8 space-y-5">
                {toolkitItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="
                        group flex gap-4 rounded-2xl
                        border border-transparent
                        p-3
                        transition-all duration-300
                        hover:border-emerald-500/15
                        hover:bg-emerald-500/5
                      "
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500 ring-1 ring-emerald-500/15">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white">
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
        </Container>
      </section>

      {/* =========================================================
          PRIVACY / RESPONSIBLE AI
      ========================================================= */}
      <section className="relative overflow-hidden bg-slate-50/80 py-20 dark:bg-slate-900/40">
        <Container>
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
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
            className="
              mx-auto max-w-4xl
              rounded-3xl
              border border-emerald-500/15
              bg-emerald-500/[0.035]
              p-7
              shadow-lg shadow-emerald-500/5
              backdrop-blur-xl
              sm:p-9
            "
          >
            <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-500 ring-1 ring-emerald-500/15">
                <Lock className="h-5 w-5" />
              </div>

              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">
                  Wellness guidance should be supportive, not a replacement
                  for professional care.
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  PsychoMentalHub provides informational wellness guidance and
                  AI-powered support. When professional assessment or care is
                  needed, students should consult a qualified mental health
                  professional.
                </p>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="relative overflow-hidden py-24 sm:py-28">
        <Container>
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
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
            className="
              relative overflow-hidden
              rounded-[36px]
              border border-emerald-500/20
              bg-gradient-to-br
              from-emerald-600
              via-teal-600
              to-cyan-600
              px-7 py-14
              text-center
              shadow-2xl shadow-emerald-500/20
              sm:px-12 sm:py-16
            "
          >
            {/* Glows */}
            <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-[90px]" />

            <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-300/15 blur-[90px]" />

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                <Sparkles className="h-4 w-4" />
                Begin With Self-Awareness
              </div>

              <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                Your Wellness Journey
                <br />
                Starts With Understanding
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
                Take a moment to understand where you are today, explore your
                wellness insights, and discover practical next steps with
                PsychoMentalHub.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/register"
                  className="
                    group inline-flex items-center justify-center gap-2
                    rounded-2xl
                    bg-white
                    px-7 py-4
                    text-sm font-bold text-emerald-700
                    shadow-xl
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:bg-emerald-50
                    hover:shadow-2xl
                  "
                >
                  Get Started Free

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/features"
                  className="
                    inline-flex items-center justify-center
                    rounded-2xl
                    border border-white/25
                    bg-white/10
                    px-7 py-4
                    text-sm font-semibold text-white
                    backdrop-blur-md
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-white/40
                    hover:bg-white/15
                  "
                >
                  Explore Features
                </Link>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}

/* Small reusable icon for the Featured Guidance badge */
function BookOpenIcon() {
  return <FileText className="h-4 w-4" />;
}
