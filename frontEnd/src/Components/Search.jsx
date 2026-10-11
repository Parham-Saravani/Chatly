import { FiSearch, FiX } from "react-icons/fi";

function Search() {
  return (
    <div className="relative w-full my-3">
      <FiSearch
        size={20}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        type="text"
        placeholder="Search chats..."
        aria-label="Search chats"
        className="w-full rounded-xl border border-slate-800 bg-bg-secondary py-3.5 pl-10 pr-4 text-sm text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/15"
      />
    </div>
  );
}

export default Search;
