import { Outlet } from "react-router";
import Sidebar from "../Components/Sidebar";
function MainLayout() {
  return (
    <div className="flex">
      <title>Chatly - Real-Time Messaging</title>
      <meta
        name="description"
        content="Connect with friends, join communities, and chat in real time with Chatly."
      />
      <Sidebar />
      <div className="px-4 py-2 max-lg:hidden">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
