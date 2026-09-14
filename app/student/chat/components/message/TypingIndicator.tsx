"use client";

import { BrainCircuit } from "lucide-react";

export default function TypingIndicator() {
  return (
    <div className="flex w-full justify-start">
      <div className="flex max-w-3xl items-center gap-3">
        {/* AI Avatar */}
        <div
          className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-gradient-to-br
            from-emerald-500
            via-cyan-500
            to-blue-500
            text-white
            shadow-lg
          "
        >
          <BrainCircuit className="h-5 w-5" />
        </div>

        {/* Typing Bubble */}
        <div
          className="
            inline-flex
            items-center
            gap-1.5
            rounded-3xl
            border
            border-slate-200/70
            bg-white/90
            px-4
            py-3
            shadow-md
            backdrop-blur-xl

            dark:border-slate-800
            dark:bg-slate-900/80
          "
        >
          {/* Dot 1 */}
          <span
            className="
              h-2
              w-2
              rounded-full
              bg-emerald-500
              opacity-40
              animate-typing-dot
            "
          />

          {/* Dot 2 */}
          <span
            className="
              h-2
              w-2
              rounded-full
              bg-cyan-500
              opacity-40
              animate-typing-dot
            "
            style={{
              animationDelay: "0.18s",
            }}
          />

          {/* Dot 3 */}
          <span
            className="
              h-2
              w-2
              rounded-full
              bg-blue-500
              opacity-40
              animate-typing-dot
            "
            style={{
              animationDelay: "0.36s",
            }}
          />
        </div>
      </div>
    </div>
  );
}