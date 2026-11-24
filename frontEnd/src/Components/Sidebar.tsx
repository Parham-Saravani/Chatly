import Chat from "./Chat/Chat";
import Search from "./Search";
import { finalData } from "../data";
import { IoMenu, IoClose } from "react-icons/io5";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import Button from "./Button";
import type { ContextMenu } from "../Types/types";
type SidebarProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
};
function Sidebar({ isMenuOpen, setIsMenuOpen }: SidebarProps) {
  const [searchText, setSearchText] = useState("");
  const [contextMenu, setContextMenu] = useState<ContextMenu | null>(null);
  const [chats, setChats] = useState(finalData);
  const changeText = (value: string) => {
    setSearchText(value);
  };

  useEffect(() => {
    console.log(searchText);
  }, [searchText]);

  return (
    <div
      className={`${isMenuOpen ? "w-170" : "w-200"} z-30 h-full bg-light-bg-card dark:bg-dark-bg-card max-lg:w-full overflow-y-hidden border-r border-r-light-border-primary dark:border-r-dark-border-primary px-1.5 py-4`}
    >
      <div className="px-2 gap-4 flex items-center justify-between mb-2">
        <Button
          onSmash={() => setIsMenuOpen((prev: boolean) => !prev)}
          Icon={isMenuOpen ? IoClose : IoMenu}
          size={27}
        />
        <Search searchText={searchText} changeText={changeText} />
      </div>
      <div className="overflow-y-scroll h-full custom-scroll pb-12">
        {chats.map((item) => (
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
