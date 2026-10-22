import Chat from "./Chat/Chat";
import Search from "./Search";
import { finalData } from "../data";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";
import Button from "./Button";

function Sidebar({ isMenuOpen, setIsMenuOpen }) {
  const [contextMenu, setContextMenu] = useState({});
  return (
    <div
      className={`${isMenuOpen ? "w-170" : "w-200"} z-30 h-full bg-light-bg-card dark:bg-dark-bg-card max-lg:w-full overflow-y-hidden border-r border-r-light-border-primary dark:border-r-dark-border-primary px-1.5 py-4`}
    >
      <div className="px-2 gap-4 flex items-center justify-between mb-2">
        <Button
          onSmash={() => setIsMenuOpen((prev) => !prev)}
          Icon={isMenuOpen ? IoClose : IoMenu}
          size={27}
        />
        <Search />
      </div>
      <div className="overflow-y-scroll h-full custom-scroll pb-12">
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
