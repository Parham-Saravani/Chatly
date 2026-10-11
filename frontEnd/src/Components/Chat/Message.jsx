import { IoCheckmark } from "react-icons/io5";
import { IoCheckmarkDone } from "react-icons/io5";

import MessageContextMenu from "./MessageContextMenu";
import { Activity } from "react";

function Message({ id, text, time, isOwn, contextMenu, setContextMenu }) {
  return (
    <div
      onContextMenu={(event) =>
        setContextMenu({ id: id, left: event.clientX, top: event.clientY })
      }
      className={`relative flex ${isOwn ? "items-end ml-auto" : "items-end"} gap-2 max-w-[75%] max-sm:max-w-[95%]`}
    >
      <div>
        <div
          className={`${isOwn ? "bg-primary-accent rounded-br-md" : "bg-bg-secondary rounded-bl-md"} rounded-2xl px-4 py-2.5`}
        >
          <p className="text-sm leading-6 text-text-primary">{text}</p>
          <div
            className={`${isOwn ? "justify-end" : ""} mt-1.5 flex items-center gap-1.5`}
          >
            <span
              className={`${isOwn ? "text-text-primary" : "text-text-mute"} text-[12px]`}
            >
              {time}
            </span>
            <Activity mode={isOwn ? "visible" : "hidden"}>
              <IoCheckmarkDone size={16} />
            </Activity>
          </div>
        </div>
      </div>
      <Activity mode={contextMenu.id === id ? "visible" : "hidden"}>
        <MessageContextMenu left={contextMenu.left} top={contextMenu.top} />
      </Activity>
    </div>
  );
}

export default Message;
