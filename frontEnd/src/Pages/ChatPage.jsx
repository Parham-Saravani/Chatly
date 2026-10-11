import { FiArrowLeft, FiMoreVertical } from "react-icons/fi";
import { useNavigate, useSearchParams } from "react-router";
import { messages } from "../data";
import Message from "../Components/Chat/Message";
import SendMessageInput from "../Components/Chat/SendMessageInput";
import { useState } from "react";
import Button from "../Components/Button";

function ChatPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [contextMenu, setContextMenu] = useState({});
  const chatID = messages[searchParams.get("chatID")];
  if (chatID) {
    return (
      <section className="flex h-full min-h-0 flex-1 flex-col overflow-hidden bg-bg-primary">
        <header className="flex items-center justify-between border-b border-border-primary bg-bg-card py-3 px-2 max-sm:px-1">
          <div className="flex min-w-0 items-center gap-3">
            <button
              onClick={() => navigate("/")}
              className="cursor-pointer rounded-xl p-2 text-text-secondary transition-colors duration-300 hover:bg-bg-card hover:text-text-primary lg:hidden"
            >
              <FiArrowLeft className="h-5 w-5" />
            </button>

            <div className="min-w-0">
              <h2 className="truncate text-sm font-semibold tracking-wide text-text-primary sm:text-base">
                Alex Carter
              </h2>
              <p className="mt-1 truncate text-xs text-text-secondary">
                last seen recently
              </p>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-1">
            <Button Icon={FiMoreVertical} size={20} />
          </div>
        </header>

        <div className="flex min-h-0 flex-1 flex-col gap-6 overflow-y-auto px-4 py-6 sm:px-6 custom-scroll">
          {chatID.map((item) => (
            <Message
              setContextMenu={setContextMenu}
              contextMenu={contextMenu}
              key={item.id}
              {...item}
            />
          ))}
        </div>

        <SendMessageInput chatID={chatID} />
      </section>
    );
  }
}

export default ChatPage;
