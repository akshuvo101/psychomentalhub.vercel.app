
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/layout/container";

const highlights = [
  {
    icon: Brain,
    label: "Wellness Assessment",
  },
  {
    icon: Sparkles,
    label: "AI-Powered Insights",
  },
  {
    icon: ShieldCheck,
    label: "Privacy-Focused",
  },
];

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      {/* Background Atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[150px]" />

        <div className="absolute left-0 top-1/4 h-72 w-72 rounded-full bg-teal-500/8 blur-[130px]" />

        <div className="absolute right-0 bottom-1/4 h-72 w-72 rounded-full bg-cyan-500/8 blur-[130px]" />
      </div>

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
            duration: 0.7,
          }}
          className="
            group relative overflow-hidden
            rounded-[36px]
            border border-emerald-400/25
            bg-gradient-to-br
            from-emerald-600
            via-teal-600
            to-cyan-600
            px-6 py-14
            shadow-2xl shadow-emerald-500/20
            sm:px-10 sm:py-16
            md:rounded-[42px]
            md:px-16 md:py-20
          "
        >
          {/* Inner Gradient */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-black/[0.08]" />

          {/* Decorative Glow */}
          <div
            className="
              pointer-events-none absolute
              -left-24 -top-24
              h-80 w-80
              rounded-full
              bg-white/10
              blur-[90px]
              transition-transform duration-1000
              group-hover:scale-125
            "
          />

          <div
            className="
              pointer-events-none absolute
              -bottom-24 -right-24
              h-80 w-80
              rounded-full
              bg-cyan-300/15
              blur-[90px]
              transition-transform duration-1000
              group-hover:scale-125
            "
          />

          {/* Decorative Grid */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:40px_40px]" />

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            {/* Badge */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: 0.15,
              }}
              className="
                mx-auto inline-flex items-center gap-2
                rounded-full
                border border-white/20
                bg-white/10
                px-4 py-2
                text-sm font-medium
                text-white
                shadow-lg shadow-black/5
                backdrop-blur-md
              "
            >
              <Sparkles className="h-4 w-4" />
              Start Your Wellness Journey
            </motion.div>

            {/* Heading */}
            <h2 className="mt-7 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              Understand Yourself.
              <br />
              <span className="text-white/90">
                Take the Next Step.
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
              Explore your wellbeing through guided assessment, personalized
              AI insights, practical recommendations, and meaningful support
              with PsychoMentalHub.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Link
                href="/register"
                className="
                  group/primary
                  inline-flex items-center justify-center gap-2
                  rounded-2xl
                  bg-white
                  px-7 py-4
                  text-sm font-bold
                  text-emerald-700
                  shadow-xl shadow-emerald-950/15
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-emerald-50
                  hover:shadow-2xl hover:shadow-black/15
                  focus:outline-none
                  focus:ring-2 focus:ring-white/60
                  focus:ring-offset-2
                  focus:ring-offset-emerald-600
                "
              >
                Get Started Free

                <ArrowRight
                  className="
                    h-5 w-5
                    transition-transform duration-300
                    group-hover/primary:translate-x-1
                  "
                />
              </Link>

              <Link
                href="/features"
                className="
                  inline-flex items-center justify-center
                  rounded-2xl
                  border border-white/25
                  bg-white/10
                  px-7 py-4
                  text-sm font-semibold
                  text-white
                  backdrop-blur-md
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-white/40
                  hover:bg-white/15
                  focus:outline-none
                  focus:ring-2 focus:ring-white/50
                "
              >
                Explore Features
              </Link>
            </div>

            {/* Feature Highlights */}
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.55,
                delay: 0.3,
              }}
              className="
                mx-auto mt-12
                flex max-w-3xl
                flex-col
                items-center
                justify-center
                gap-3
                sm:flex-row sm:gap-4
              "
            >
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="
                      flex w-full items-center justify-center gap-2
                      rounded-xl
                      border border-white/10
                      bg-white/[0.07]
                      px-4 py-3
                      text-sm text-white/85
                      backdrop-blur-sm
                      transition-all duration-300
                      hover:border-white/20
                      hover:bg-white/10
                      sm:w-auto
                    "
                  >
                    <Icon className="h-4 w-4 text-white" />

                    <span>{item.label}</span>

                    {index < highlights.length - 1 && (
                      <CheckCircle2 className="ml-1 hidden h-3.5 w-3.5 text-white/50 sm:block" />
                    )}
                  </div>
                );
              })}
            </motion.div>

            {/* Trust Note */}
            <p className="mt-7 text-xs text-white/55 sm:text-sm">
              Built to support student wellness with responsible,
              privacy-focused AI guidance.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
