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
}) {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  return (
    <div
      onContextMenu={(event) => {
        setContextMenu({
          id: id,
          left: event.clientX,
          top: event.clientY,
        });
      }}
      onClick={() => {
        navigate(`/chat?chatID=${id}`, { state: "shot-chat-history" });
        setContextMenu({});
      }}
      className="relative flex w-full items-center gap-3 rounded-xl p-3 text-left transition-colors hover:bg-white/5 cursor-pointer"
    >
      <div className="relative shrink-0">
        <img
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
          }}
          src={avatar}
          alt={`${name} profile`}
          className={`${isLoading && "bg-gray-700 animate-pulse"} h-12 w-12 rounded-full object-cover`}
        />

        <Activity mode={isOnline ? "visible" : "hidden"}>
          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-bg-primary bg-green-500" />
        </Activity>
      </div>

      <div className="min-w-0 flex-1">
        <div className="mb-1 flex items-center justify-between gap-2">
          <h3 className="truncate text-sm font-semibold text-slate-100">
            {name}
          </h3>

          <span className="shrink-0 text-xs text-slate-500">{time}</span>
        </div>

        <div className="flex items-center justify-between gap-2">
          <p className="truncate text-xs text-slate-400">{lastMessage}</p>
          <Activity mode={unreadCount !== 0 ? "visible" : "hidden"}>
            <span className="flex h-5 min-w-5 shrink-0 items-center justify-center rounded-full bg-hover-accent px-1.5 text-[10px] font-medium text-white">
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
