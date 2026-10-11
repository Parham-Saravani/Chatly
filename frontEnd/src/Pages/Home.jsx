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
    <section className="relative flex min-h-full flex-1 items-center justify-center overflow-hidden dark:bg-dark-bg-primary bg-light-bg-primary px-5 py-10 sm:px-8">
      <p className="text-sm bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-2xl px-3 py-1">select a chat to start messaging</p>
    </section>
  );
}

export default Home;