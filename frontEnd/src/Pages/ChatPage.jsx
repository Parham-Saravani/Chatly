import {
  FiArrowLeft,
  FiPhone,
  FiVideo,
  FiMoreVertical,
  FiSearch,
} from "react-icons/fi";
import { useSearchParams } from "react-router";
import { messages } from "../data";
import Message from "../Components/Chat/Message";
import SendMessageInput from "../Components/Chat/SendMessageInput";
import { useState } from "react";
function ChatPage() {
  const [searchParams] = useSearchParams();
  const [contextMenu, setContextMenu] = useState({});
  const data = messages[searchParams.get("chatID")];
  if (data) {
    return (
      <section className="animate-fadeIn flex h-full min-h-0 flex-1 flex-col overflow-hidden bg-bg-primary">
        {/* Chat Header */}
        <header className="flex items-center justify-between border-b border-border-primary bg-bg-card/95 px-4 py-3 sm:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <button className="rounded-xl p-2 text-text-secondary transition hover:bg-bg-card hover:text-text-primary md:hidden">
              <FiArrowLeft className="h-5 w-5" />
            </button>

            <div className="relative shrink-0">
              <img
                src="https://i.pravatar.cc/150?img=11"
                alt="Alex Carter"
                className="size-11 rounded-full object-cover ring-2 ring-border-primary"
              />
              <span className="absolute bottom-0 right-0 size-3 rounded-full border-2 border-bg-card bg-success" />
            </div>

            <div className="min-w-0">
              <h2 className="truncate text-sm font-semibold tracking-wide text-text-primary sm:text-base">
                Alex Carter
              </h2>
              <p className="mt-1 truncate text-xs text-text-secondary">
                Active now
              </p>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-1">
            <button
              aria-label="Search messages"
              className="rounded-xl p-2.5 text-text-secondary transition hover:bg-primary-accent/10 hover:text-primary-accent"
            >
              <FiSearch className="h-5 w-5" />
            </button>

            <button
              aria-label="Voice call"
              className="rounded-xl p-2.5 text-text-secondary transition hover:bg-primary-accent/10 hover:text-primary-accent"
            >
              <FiPhone className="h-5 w-5" />
            </button>

            <button
              aria-label="More options"
              className="rounded-xl p-2.5 text-text-secondary transition hover:bg-primary-accent/10 hover:text-primary-accent"
            >
              <FiMoreVertical className="h-5 w-5" />
            </button>
          </div>
        </header>
        {/* Messages Area */}
        <div className="flex min-h-0 flex-1 flex-col gap-6 overflow-y-auto px-4 py-6 sm:px-6 custom-scroll">
          {data.map((item) => (
            <Message
              setContextMenu={setContextMenu}
              contextMenu={contextMenu}
              key={item.id}
              {...item}
            />
          ))}
        </div>
        {/* Message Composer */}
        <footer className="border-t border-border-primary px-3 py-4 sm:px-6">
          <SendMessageInput />
        </footer>
      </section>
    );
  }
}

export default ChatPage;
