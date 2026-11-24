import { FiArrowLeft, FiMessageSquare } from "react-icons/fi";
import type { NavigateFunction } from "react-router";
type ChatNotFoundProps = {
  navigate: NavigateFunction;
};
function ChatNotFound({ navigate }: ChatNotFoundProps) {
  return (
    <div className="flex min-h-screen flex-col flex-1 items-center justify-center dark:bg-dark-bg-primary px-4 text-center">
      <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-2xl border border-border-primary bg-bg-card">
        <FiMessageSquare className="h-9 w-9 text-text-secondary" />
      </div>

      <h1 className="mb-2 text-xl font-semibold text-text-primary">
        Chat Not Found
      </h1>

      <p className="mb-6 max-w-sm text-sm leading-6 text-text-secondary">
        This chat doesn't exist or may have been deleted.
      </p>

      <button
        onClick={() => navigate("/")}
        className="dark:bg-dark-primary-accent bg-light-primary-accent dark:hover:bg-dark-hover-accent hover:bg-light-hover-accent  cursor-pointer flex items-center gap-2 rounded-xl bg-primary-accent px-5 py-3 text-sm font-medium text-white transition-colors duration-300"
      >
        <FiArrowLeft className="h-4 w-4" />
        Back to Chats
      </button>
    </div>
  );
}

export default ChatNotFound;
