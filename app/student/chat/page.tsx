
"use client";

import MessageList from "./components/message/MessageList";
import ChatInput from "./input/ChatInput";
import { useChatContext } from "./context/ChatContext";

export default function ChatPage() {
  const {
    activeConversationId,
    messages,
    sendMessage,
    isLoadingMessages,
    isSendingMessage,
    isAiLimitReached,
    clearAiLimit,
  } = useChatContext();

  const isLoading =
    isLoadingMessages || isSendingMessage;

  return (
    <div
      className="
        flex
        h-full
        min-h-0
        flex-col
        bg-slate-50
        dark:bg-slate-950
      "
    >
      {/* ==================================================
          Message Area
      ================================================== */}

      <div
        className="
          min-h-0
          flex-1
          overflow-hidden
        "
      >
        <MessageList
          messages={messages}
          isLoading={isLoading}
        />
      </div>

      {/* ==================================================
          AI Limit Notice
      ================================================== */}

      {isAiLimitReached ? (
        <div
          className="
            w-full
            shrink-0
            border-t
            border-amber-200/70
            bg-amber-50/90
            px-4
            py-3
            dark:border-amber-900/40
            dark:bg-amber-950/20
          "
        >
          <div
            className="
              mx-auto
              flex
              max-w-3xl
              items-center
              justify-between
              gap-4
            "
          >
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span
                  className="
                    flex
                    h-7
                    w-7
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-amber-500/10
                    text-sm
                  "
                >
                  ✦
                </span>

                <p
                  className="
                    text-sm
                    font-semibold
                    text-amber-900
                    dark:text-amber-200
                  "
                >
                  AI Counselor is temporarily unavailable
                </p>
              </div>

              <p
                className="
                  mt-1
                  pl-9
                  text-xs
                  leading-5
                  text-amber-800/70
                  dark:text-amber-300/60
                "
              >
                The current AI usage limit has been
                reached. Your conversations are safe.
                Please try again later.
              </p>
            </div>

            <button
              type="button"
              onClick={clearAiLimit}
              className="
                shrink-0
                rounded-lg
                border
                border-amber-300
                bg-white
                px-3
                py-2
                text-xs
                font-semibold
                text-amber-800
                transition
                hover:bg-amber-100
                dark:border-amber-800
                dark:bg-amber-950/40
                dark:text-amber-200
                dark:hover:bg-amber-900/40
              "
            >
              Try Again
            </button>
          </div>
        </div>
      ) : (
        /* ==================================================
            Input Area
        ================================================== */

        <div
          className="
            w-full
            shrink-0
          "
        >
          <ChatInput
            onSend={sendMessage}
            isLoading={
              isLoadingMessages ||
              isSendingMessage ||
              !activeConversationId
            }
          />
        </div>
      )}
    </div>
  );
}