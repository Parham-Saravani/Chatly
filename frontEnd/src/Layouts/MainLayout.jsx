import { Outlet, useLocation } from "react-router";
import Sidebar from "../Components/Sidebar";
import { useEffect, useState } from "react";
import Menu from "../Components/Menu/Menu";

function MainLayout() {
  const { state } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.addEventListener("contextmenu", (event) => {
      event.preventDefault();
    });
  }, []);
  return (
    <div className="animate-fadeIn flex h-full overflow-hidden">
      <title>Chatly — Messaging App</title>
      <meta
        name="description"
        content="Connect with friends, join communities, and chat in real time with Chatly."
      />
      <Menu setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />

      <Sidebar setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      <div
        className={`flex w-full h-full max-lg:fixed max-lg:-right-260 max-md:-right-220 max-sm:-right-200 max-lg:transition-right max-lg:duration-300 ${state === "shot-chat-history" && "right-0! z-1000"}`}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
