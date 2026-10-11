import { FiPaperclip } from "react-icons/fi";
import { IoSend } from "react-icons/io5";

import Button from "../Button";
import { Activity, useEffect, useState } from "react";
function sendMessageInput(chatID) {
  const [message, setMessage] = useState("");
  useEffect(() => {
    setMessage("");
  },[chatID]);
  return (
    <div className="shadow-xl w-full flex items-center border-t dark:border-dark-border-primary border-light-border-primary dark:bg-dark-bg-card bg-light-bg-card p-2 sm:gap-3 sm:p-3">
      <div className="flex gap-1">
        <Button Icon={FiPaperclip} size={20} />
      </div>

      <textarea
        onKeyDown={(event) => {
          if (event.shiftKey && event.code === "Enter") {
            return;
          }
          if (event.code === "Enter") {
            event.preventDefault();
          }
        }}
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        rows={1}
        placeholder="Write a message..."
        className="max-h-32 min-h-10 flex-1 resize-none bg-transparent px-2 py-2.5 text-sm text-text-primary outline-none placeholder:text-text-mute"
      />
      <Activity mode={message.length ? "visible" : "hidden"}>
        <button
          className={`${message.length ? "animate-fadeIn" : ""} cursor-pointer flex h-10 w-10 shrink-0 items-center justify-center rounded-xl dark:bg-dark-primary-accent bg-light-primary-accent text-white shadow-lg shadow-primary-accent/20 transition-colors duration-300 dark:hover:bg-dark-hover-accent hover:bg-light-hover-accent`}
        >
          <IoSend size={17} />
        </button>
      </Activity>
    </div>
  );
}

export default sendMessageInput;
