import { Activity, useState } from "react";
import { useNavigate } from "react-router";
import ChatContextMenu from "./ChatContextMenu";
function Chat({
  id,
  name,
  lastMessage,
  time,
  unreadCount,
  isOnline,
  avatar,
  contextMenu,
  setContextMenu,
  isGroup,
  membersCount,
}) {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  return (
    <div
      onContextMenu={(event) => {
        setContextMenu({
          id: id,
          left: event.pageX,
          top: event.pagey,
        });
      }}
      onClick={() => {
        navigate(`/chat?chatID=${id}`, {
          state: { name, isOnline, isGroup, membersCount },
        });
        setContextMenu({});
      }}
      className="relative flex w-full items-center gap-3 rounded-xl p-3 text-left transition-colors duration-300 dark:hover:bg-dark-bg-secondary hover:bg-light-bg-secondary cursor-pointer"
    >
      <div className="relative shrink-0">
        <img
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
          }}
          src={avatar}
          alt={`${name} profile`}
          className={`${isLoading && "bg-gray-700 animate-pulse"} size-13 max-sm:size-10 rounded-full object-cover`}
        />

        <Activity mode={isOnline && !isGroup ? "visible" : "hidden"}>
          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-light-bg-primary dark:border-dark-bg-primary bg-green-600" />
        </Activity>
      </div>

      <div className="min-w-0 flex-1">
        <div className="mb-1 flex items-center justify-between gap-2">
          <h3 className="truncate text-sm max-sm:text-xs font-semibold text-light-text-primary dark:text-dark-text-primary">
            {name}
          </h3>

          <span className="shrink-0 text-xs max-sm:text-[10px] text-light-text-secondary dark:text-dark-text-secondary">
            {time}
          </span>
        </div>

        <div className="flex items-center justify-between gap-2">
          <p className="truncate text-xs max-sm:text-[11px] max-sm:w-30  text-light-text-secondary dark:text-dark-text-secondary">
            {lastMessage}
          </p>
          <Activity mode={unreadCount !== 0 ? "visible" : "hidden"}>
            <span className="flex size-4.5 max-sm:size-4 shrink-0 items-center justify-center rounded-full dark:bg-dark-hover-accent bg-light-hover-accent px-1.5 text-[10px] font-medium text-white">
              {unreadCount}
            </span>
          </Activity>
        </div>
      </div>
      <Activity mode={contextMenu.id === id ? "visible" : "hidden"}>
        <ChatContextMenu contextMenu={contextMenu} />
      </Activity>
    </div>
  );
}

export default Chat;
