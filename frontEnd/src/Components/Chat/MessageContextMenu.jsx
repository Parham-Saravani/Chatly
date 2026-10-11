import {
  FiTrash2,
  FiCornerUpLeft,
  FiCopy,
  FiCornerUpRight,
  FiMapPin,
} from "react-icons/fi";
function MessageContextMenu({ left, top }) {
  return (
    <div
      className={`absolute right-${left} top-${top} z-50 mt-2 w-52 rounded-xl border border-border-primary bg-bg-card p-1.5 shadow-xl`}
    >
      <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-text-primary transition hover:bg-bg-secondary cursor-pointer">
        <FiCornerUpLeft className="h-4 w-4 text-text-secondary" />
        Reply
      </button>
      <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-text-primary transition hover:bg-bg-secondary cursor-pointer">
        <FiCornerUpRight className="h-4 w-4 text-text-secondary" />
        Forward
      </button>
      <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-text-primary transition hover:bg-bg-secondary cursor-pointer">
        <FiCopy className="h-4 w-4 text-text-secondary" />
        Copy text
      </button>

      <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-text-primary transition hover:bg-bg-secondary cursor-pointer">
        <FiMapPin className="h-4 w-4 text-text-secondary" />
        Pin message
      </button>

      <div className="my-1 border-t border-border-primary" />

      <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-danger transition hover:bg-danger/10 cursor-pointer">
        <FiTrash2 className="h-4 w-4" />
        Delete message
      </button>
    </div>
  );
}

export default MessageContextMenu;
