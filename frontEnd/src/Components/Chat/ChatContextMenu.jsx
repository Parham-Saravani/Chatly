import { FiMapPin, FiArchive, FiTrash2 } from "react-icons/fi";
function ChatContextMenu({left , top}) {
  return (
    <div className={`absolute left-${left} top-${top} top-full z-50 mt-2 w-56 rounded-xl border border-border-primary bg-bg-card p-1.5 shadow-xl`}>
      <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-text-primary transition hover:bg-bg-secondary">
        <FiMapPin className="h-4 w-4 text-text-secondary" />
        Pin conversation
      </button>

      <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-text-primary transition hover:bg-bg-secondary">
        <FiArchive className="h-4 w-4 text-text-secondary" />
        Archive chat
      </button>

      <div className="my-1 border-t border-border-primary" />

      <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-danger transition hover:bg-danger/10">
        <FiTrash2 className="h-4 w-4" />
        Delete conversation
      </button>
    </div>
  );
}

export default ChatContextMenu;
