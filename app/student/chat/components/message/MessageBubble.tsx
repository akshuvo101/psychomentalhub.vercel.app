"use client";

import { BrainCircuit, User } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { MessageRole } from "../../types/message";

export interface MessageBubbleProps {
  role: MessageRole;
  content: string;
  time?: string;
}

export default function MessageBubble({
  role,
  content,
  time,
}: MessageBubbleProps) {
  const isUser = role === "user";

  return (
    <div
      className={`mb-6 flex w-full ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`flex max-w-[88%] items-end gap-3 ${
          isUser ? "flex-row-reverse" : "flex-row"
        }`}
      >
        {/* Avatar */}

        <div
          className={`
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-full
            transition-all
            duration-300

            ${
              isUser
                ? `
                  bg-gradient-to-br
                  from-cyan-500
                  via-blue-600
                  to-indigo-600
                  text-white
                  shadow-md
                  shadow-blue-500/20

                  dark:from-emerald-400
                  dark:via-cyan-500
                  dark:to-blue-600
                  dark:text-white
                  dark:shadow-cyan-500/20
                `
                : `
                  bg-gradient-to-br
                  from-emerald-500
                  via-cyan-500
                  to-blue-500
                  text-white
                  shadow-lg
                  shadow-cyan-500/20
                `
            }
          `}
        >
          {isUser ? (
            <User className="h-5 w-5" />
          ) : (
            <BrainCircuit className="h-5 w-5" />
          )}
        </div>

        {/* Bubble */}

        <div
          className={`
            rounded-3xl
            px-5
            py-4
            shadow-sm
            transition-all
            duration-300

            ${
              isUser
                ? `
                  rounded-br-lg

                  bg-gradient-to-br
                  from-cyan-600
                  via-blue-600
                  to-indigo-600

                  text-white

                  shadow-lg
                  shadow-blue-500/15

                  dark:from-emerald-500
                  dark:via-cyan-500
                  dark:to-blue-600

                  dark:text-white

                  dark:shadow-cyan-500/15
                `
                : `
                  rounded-bl-lg

                  border
                  border-slate-200/70

                  bg-white/90
                  text-slate-900

                  shadow-sm
                  backdrop-blur-xl

                  dark:border-slate-800
                  dark:bg-slate-900/80
                  dark:text-slate-100
                `
            }
          `}
        >
          {!isUser && (
            <div className="mb-3 flex items-center gap-2">
              <BrainCircuit className="h-4 w-4 text-emerald-500" />

              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                WellMind AI
              </span>
            </div>
          )}

          <div
            className={`
              prose
              prose-sm
              max-w-none

              prose-headings:mb-2
              prose-headings:mt-4

              prose-p:my-2
              prose-p:leading-7

              prose-ul:my-3
              prose-ol:my-3

              prose-li:my-1

              prose-strong:text-inherit

              prose-a:text-cyan-600
              prose-a:no-underline
              hover:prose-a:underline

              ${
                isUser
                  ? `
                    prose-invert

                    prose-p:text-white
                    prose-headings:text-white
                    prose-strong:text-white
                    prose-li:text-white
                  `
                  : `
                    dark:prose-invert
                  `
              }
            `}
          >
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {content}
            </ReactMarkdown>
          </div>

          {time && (
            <p
              className={`
                mt-4
                text-[11px]

                ${
                  isUser
                    ? "text-white/75"
                    : "text-slate-400"
                }
              `}
            >
              {time}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}