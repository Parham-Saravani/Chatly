import { FiArrowLeft, FiMessageSquare, FiMoreVertical } from "react-icons/fi";
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
      <section className="flex h-full min-h-0 flex-1 flex-col overflow-hidden dark:bg-dark-bg-primary bg-light-bg-primary">
        <header
          onClick={(event) => console.log("fasdfa")}
          className="cursor-pointer shadow-xl flex items-center justify-between border-b border-light-border-primary dark:border-dark-border-primary dark:bg-dark-bg-card bg-light-bg-card py-3 px-6 max-xl:px-2 max-sm:px-1"
        >
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
              <p className="mt-1 truncate text-xs dark:text-dark-text-secondary text-light-text-secondary">
                last seen recently
              </p>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-1">
            <Button
              onSmash={(event) => {
                event.stopPropagation();
                console.log("btn Clicked!");
              }}
              Icon={FiMoreVertical}
              size={20}
            />
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
  } else {
    return (
      <div className="flex min-h-screen flex-col flex-1 items-center justify-center dark:bg-dark-bg-primary px-4 text-center">
        <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-2xl border border-border-primary bg-bg-card">
          <FiMessageSquare className="h-9 w-9 text-text-secondary" />
        </div>

        <h1 className="mb-2 text-xl font-semibold text-text-primary">
          Chat Not Found
        </h1>

        <p className="mb-6 max-w-sm text-sm leading-6 text-text-secondary">
          This chat doesn't exist or may have been deleted.
        </p>

        <button
          onClick={() => navigate("/")}
          className="dark:bg-dark-primary-accent bg-light-primary-accent dark:hover:bg-dark-hover-accent hover:bg-light-hover-accent  cursor-pointer flex items-center gap-2 rounded-xl bg-primary-accent px-5 py-3 text-sm font-medium text-white transition-colors duration-300"
        >
          <FiArrowLeft className="h-4 w-4" />
          Back to Chats
        </button>
      </div>
    );
  }
}

export default ChatPage;
