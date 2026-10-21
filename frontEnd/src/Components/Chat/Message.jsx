import { IoCheckmark } from "react-icons/io5";
import { IoCheckmarkDone } from "react-icons/io5";

import MessageContextMenu from "./MessageContextMenu";
import { Activity } from "react";

function Message({ id, text, time, isOwn, contextMenu, setContextMenu }) {
  return (
    <div
      onContextMenu={(event) => {
        console.log(`Position : `, event.clientX, event.clientY);

        setContextMenu({
          id: id,
          left: event.clientX,
          top: event.clientY <= 300 ? event.clientY + 200 : event.clientY,
        });
      }}
      className={`relative flex ${isOwn ? "items-end ml-auto" : "items-end"} gap-2 max-w-[75%] max-sm:max-w-[95%]`}
    >
      <div>
        <div
          className={`${isOwn ? "dark:bg-dark-message-sent bg-light-message-sent rounded-br-md" : "dark:bg-dark-message-received bg-light-message-received rounded-bl-md"} rounded-2xl px-4 py-2.5`}
        >
          <p
            className={`text-sm leading-6 ${isOwn ? "text-dark-text-primary" : "text-light-text-primary dark:text-dark-text-primary"}`}
          >
            {text}
          </p>
          <div
            className={`${isOwn ? "justify-end" : ""} mt-1.5 flex items-center gap-1.5 ${isOwn ? "text-dark-text-primary" : "dark:text-dark-text-secondary text-light-text-secondary"}`}
          >
            <span className="text-[12px]">{time}</span>
            <Activity mode={isOwn ? "visible" : "hidden"}>
              <IoCheckmarkDone size={16} />
            </Activity>
          </div>
        </div>
      </div>
      <Activity mode={contextMenu.id === id ? "visible" : "hidden"}>
        <MessageContextMenu {...contextMenu} />
      </Activity>
    </div>
  );
}

export default Message;
