import Chat from "../Components/Chat";
import Search from "./Search";
import { finalData } from "../data";
function Sidebar() {
  return (
    <div className="h-screen bg-bg-card w-100 max-lg:w-full overflow-y-hidden border-r border-r-border-primary px-1.5 py-4">
      <div className="px-2">
        <h2 className="font-bold text-xl">Chats</h2>
        <Search />
      </div>
      <div className="overflow-y-scroll h-full custom-scroll pb-20">
        {finalData.map((item) => (
          <Chat key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
