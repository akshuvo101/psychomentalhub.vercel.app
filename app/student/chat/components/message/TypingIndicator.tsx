"use client";

import { BrainCircuit } from "lucide-react";

export default function TypingIndicator() {
  return (
    <div className="flex w-full justify-start">
      <div className="flex items-center gap-3">
        {/* AI Icon */}
        <div
          className="
            flex h-10 w-10 shrink-0 items-center justify-center
            rounded-full
            bg-gradient-to-br
            from-emerald-500 via-cyan-500 to-blue-500
            text-white
            shadow-lg shadow-cyan-500/20
            dark:shadow-cyan-400/10
          "
        >
          <BrainCircuit className="h-5 w-5" />
        </div>

        {/* Typing Dots — No Bubble */}
        <div className="flex items-center gap-1.5">
          {/* Dot 1 */}
          <span
            className="
              h-2.5 w-2.5
              rounded-full
              bg-emerald-500
              dark:bg-emerald-400
              animate-typing-dot
            "
          />

          {/* Dot 2 */}
          <span
            className="
              h-2.5 w-2.5
              rounded-full
              bg-cyan-500
              dark:bg-cyan-400
              animate-typing-dot
            "
            style={{
              animationDelay: "0.18s",
            }}
          />

          {/* Dot 3 */}
          <span
            className="
              h-2.5 w-2.5
              rounded-full
              bg-blue-500
              dark:bg-blue-400
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