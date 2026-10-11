import Chat from "./Chat/Chat";
import Search from "./Search";
import { finalData } from "../data";
import { useState } from "react";
function Sidebar() {
  const [contextMenu, setContextMenu] = useState({});

  return (
    <div className="h-full bg-bg-card w-120 max-lg:w-full overflow-y-hidden border-r border-r-border-primary px-1.5 py-4">
      <div className="px-2">
        <h2 className="font-bold text-2xl">Chats</h2>
        <Search />
      </div>
      <div className="overflow-y-scroll h-full custom-scroll pb-22">
        {finalData.map((item) => (
          <Chat
            setContextMenu={setContextMenu}
            contextMenu={contextMenu}
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
