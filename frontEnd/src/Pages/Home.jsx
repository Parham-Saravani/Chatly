import {
  FiMessageCircle,
  FiUsers,
  FiArrowRight,
  FiPlus,
  FiSearch,
  FiSmile,
} from "react-icons/fi";

function Home() {
  return (
    <section className="relative flex min-h-full flex-1 items-center justify-center overflow-hidden bg-bg-primary px-5 py-10 sm:px-8">
      {/* Background Effects */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary-accent/[0.08] blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-purple-500/[0.06] blur-[120px]" />

      <div className="relative w-full max-w-3xl">
        {/* Welcome Header */}
        <div className="mb-12 text-center">
          <div className="relative mx-auto mb-7 flex h-24 w-24 items-center justify-center">
            <div className="absolute inset-0 rounded-[2rem] bg-primary-accent/10 blur-xl" />

            <div className="relative flex h-20 w-20 items-center justify-center rounded-[1.75rem] border border-primary-accent/20 bg-bg-secondary shadow-xl shadow-primary-accent/5">
              <FiMessageCircle className="h-9 w-9 text-primary-accent" />

              <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full border-4 border-bg-primary bg-emerald-500">
                <FiSmile className="h-3 w-3 text-white" />
              </span>
            </div>
          </div>

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary-accent">
            Welcome to Chatly
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Your conversations
            <span className="mt-2 block text-text-secondary">
              start right here.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-text-mute">
            Your space for conversations, shared moments, and staying
            connected with the people who matter.
          </p>
        </div>

        {/* Getting Started */}
        <div className="mb-5 flex items-center gap-3">
          <div className="h-5 w-1 rounded-full bg-primary-accent" />
          <h2 className="text-sm font-semibold text-text-primary">
            Get started
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {/* New Conversation */}
          <div className="group relative overflow-hidden rounded-2xl border border-border-primary bg-bg-secondary/70 p-5 transition duration-300 hover:border-primary-accent/40 hover:bg-bg-secondary sm:p-6">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary-accent/[0.06] blur-2xl transition group-hover:bg-primary-accent/10" />

            <div className="relative flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary-accent/20 bg-primary-accent/10">
                <FiPlus className="h-5 w-5 text-primary-accent" />
              </div>

              <FiArrowRight className="h-4 w-4 text-text-mute transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary-accent" />
            </div>

            <h3 className="relative mt-5 text-base font-semibold text-text-primary">
              Start a conversation
            </h3>

            <p className="relative mt-2 text-xs leading-6 text-text-secondary">
              Reach out to someone and start a new chat.
            </p>
          </div>

          {/* Existing Conversations */}
          <div className="group relative overflow-hidden rounded-2xl border border-border-primary bg-bg-secondary/70 p-5 transition duration-300 hover:border-primary-accent/40 hover:bg-bg-secondary sm:p-6">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-500/[0.05] blur-2xl transition group-hover:bg-blue-500/10" />

            <div className="relative flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-400/10">
                <FiSearch className="h-5 w-5 text-blue-400" />
              </div>

              <FiArrowRight className="h-4 w-4 text-text-mute transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary-accent" />
            </div>

            <h3 className="relative mt-5 text-base font-semibold text-text-primary">
              Find your conversations
            </h3>

            <p className="relative mt-2 text-xs leading-6 text-text-secondary">
              Select a chat from your sidebar to pick up where you left off.
            </p>
          </div>
        </div>

        {/* Bottom Hint */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 rounded-2xl border border-border-primary/70 bg-bg-secondary/30 px-5 py-4 text-center sm:flex-row sm:text-left">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-bg-secondary">
            <FiUsers className="h-4 w-4 text-text-secondary" />
          </div>

          <p className="text-xs leading-6 text-text-mute">
            <span className="font-medium text-text-secondary">
              A little hello goes a long way.
            </span>{" "}
            Choose a conversation from the sidebar or start something new.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;