import { FiPaperclip, FiSmile, FiSend, FiImage } from "react-icons/fi";
function sendMessageInput() {
  return (
    <div className="mx-auto flex max-w-5xl items-end gap-2 rounded-2xl border border-border-primary bg-bg-card p-2 sm:gap-3 sm:p-3">
      <button className="shrink-0 rounded-xl p-2 text-text-secondary transition hover:bg-bg-secondary hover:text-primary-accent">
        <FiPaperclip className="h-5 w-5" />
      </button>

      <button className="hidden shrink-0 rounded-xl p-2 text-text-secondary transition hover:bg-bg-secondary hover:text-primary-accent sm:block">
        <FiImage className="h-5 w-5" />
      </button>

      <textarea
        rows={1}
        placeholder="Write a message..."
        className="max-h-32 min-h-10 flex-1 resize-none bg-transparent px-2 py-2.5 text-sm text-text-primary outline-none placeholder:text-text-mute"
      />

      <button className="shrink-0 rounded-xl p-2 text-text-secondary transition hover:bg-bg-secondary hover:text-primary-accent">
        <FiSmile className="h-5 w-5" />
      </button>

      <button className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-accent text-white shadow-lg shadow-primary-accent/20 transition hover:bg-hover-accent">
        <FiSend className="h-4 w-4" />
      </button>
    </div>
  );
}

export default sendMessageInput;
