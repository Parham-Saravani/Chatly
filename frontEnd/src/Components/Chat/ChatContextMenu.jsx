import { FiArchive, FiTrash2 } from "react-icons/fi";
import { MdPushPin } from "react-icons/md";

function ChatContextMenu({ left, top }) {
  return (
    <div
      className={`shadow-[0_10px_10px_rgba(102,40,50,1)] absolute right-${left} top-17 z-50 mt-2 w-52 rounded-xl border dark:border-dark-border-primary border-light-border-primary dark:bg-dark-bg-card bg-light-bg-card p-1.5 shadow-xl`}
    >
      <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-text-primary transition dark:hover:bg-dark-bg-secondary hover:bg-light-bg-secondary cursor-pointer">
        <MdPushPin className="h-4 w-4 text-text-secondary" />
        Pin conversation
      </button>

      <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-text-primary transition dark:hover:bg-dark-bg-secondary hover:bg-light-bg-secondary cursor-pointer">
        <FiArchive className="h-4 w-4 text-text-secondary" />
        Archive chat
      </button>

      <div className="my-1 border-t dark:border-dark-border-primary border-light-border-primary" />

      <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm dark:text-dark-danger text-light-danger transition dark:hover:bg-dark-danger/10 hover:bg-light-danger/10 cursor-pointer">
        <FiTrash2 className="h-4 w-4" />
        Delete conversation
      </button>
    </div>
  );
}

export default ChatContextMenu;
