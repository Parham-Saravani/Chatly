import { FiArrowLeft, FiMoreVertical } from "react-icons/fi";
import { useLocation, useNavigate, useSearchParams } from "react-router";
import { messages } from "../data";
import Message from "../Components/Chat/Message";
import SendMessageInput from "../Components/Chat/SendMessageInput";
import { useEffect, useState } from "react";
import Button from "../Components/Button";
import ChatNotFound from "../Components/Empty/ChatNotFound";
import Modal from "../Components/Modal/Modal";
import UserModalContent from "../Components/Modal/elements/UserModalContent";
import type { ContextMenu } from "../Types/types";
import type { MessageType } from "../Types/types";

const memberFormatter = (members: number) => {
  const divided = members / 10;
  if (divided > 0 && divided < 1000) {
    return `${members.toString()[0]}.${members.toString()[1]}K subscribers`;
  } else if (divided > 10_000 && divided < 100_000) {
    return `${members.toString().slice(0, 3)}${+String(members)[4]! ? `.${String(members)[4]}` : ""}K subscribers`;
  } else {
    return `${members.toString()[0]}.${members.toString()[1]} subscribers`;
  }
};

function ChatPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();
  const [searchParams] = useSearchParams();
  const [contextMenu, setContextMenu] = useState<ContextMenu | null>(null);
  const chatID = searchParams.get("chatID");
  const chatData = chatID ? messages[chatID] : undefined;
  const members = state?.membersCount;

  const clearContextMenu = () => {
    setContextMenu(null);
  };
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    clearContextMenu();
  }, [chatData]);

  if (chatData && state) {
    return (
      <>
        <section
          onClick={clearContextMenu}
          className="flex h-full min-h-0 flex-1 flex-col overflow-hidden dark:bg-dark-bg-primary bg-light-bg-primary"
        >
          <header
            onClick={() => setIsModalOpen(true)}
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
                  {state.name}
                </h2>
                {state.isGroup ? (
                  <p className="mt-1 truncate text-xs dark:text-dark-text-secondary text-light-text-secondary">
                    {members.toString().length <= 3
                      ? `${members} subscibers`
                      : memberFormatter(members)}
                  </p>
                ) : state.isOnline ? (
                  <p className="mt-1 truncate text-xs text-light-primary-accent dark:text-dark-primary-accent">
                    online
                  </p>
                ) : (
                  <p className="mt-1 truncate text-xs dark:text-dark-text-secondary text-light-text-secondary">
                    last seen recently
                  </p>
                )}
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-1">
              <Button
                onSmash={(event: React.MouseEvent<HTMLButtonElement>) => {
                  event.stopPropagation();
                }}
                Icon={FiMoreVertical}
                size={20}
              />
            </div>
          </header>

          <div
            onScroll={clearContextMenu}
            className="flex min-h-0 flex-1 flex-col gap-6 overflow-y-auto px-4 py-6 sm:px-6 custom-scroll dark:bg-dark-bg-primary bg-light-bg-primary"
          >
            {chatData.map((item: MessageType) => (
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

        <Modal onClose={closeModal} isModalOpen={isModalOpen}>
          <UserModalContent {...state} />
        </Modal>
      </>
    );
  } else {
    return <ChatNotFound navigate={navigate} />;
  }
}

export default ChatPage;
