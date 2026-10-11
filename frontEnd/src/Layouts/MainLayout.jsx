import { Outlet } from "react-router";
import Sidebar from "../Components/Sidebar";
import { useEffect } from "react";

function MainLayout() {
  useEffect(() => {    
    document.addEventListener('contextmenu', (event) => {
      event.preventDefault()
    })
  }, [])
  return (
    <div className="flex h-full overflow-hidden">
      <title>Chatly - Real-Time Messaging</title>
      <meta
        name="description"
        content="Connect with friends, join communities, and chat in real time with Chatly."
      />

      <Sidebar />

      <div className="flex w-full max-lg:hidden">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
