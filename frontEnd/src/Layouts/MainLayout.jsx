import { Outlet, useLocation } from "react-router";
import Sidebar from "../Components/Sidebar";
import { useEffect } from "react";
import { getCookie } from "../utilities/cookie";

function MainLayout() {
  const { state } = useLocation();

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
      <Sidebar />
      <div
        className={`flex w-full h-full max-lg:fixed max-lg:-right-260 max-md:-right-220 max-sm:-right-200 max-lg:transition-right max-lg:duration-300 ${state === "shot-chat-history" && "right-0! z-1000"}`}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
