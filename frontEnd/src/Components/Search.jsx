import { FiSearch } from "react-icons/fi";

function Search({ searchText, changeText }) {
  return (
    <div className="relative w-full">
      <FiSearch
        size={20}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        value={searchText}
        onInput={(event) => changeText(event)}
        type="text"
        placeholder="Search Chats..."
        aria-label="Search Chats"
        className="w-full rounded-xl border border-light-border-primary dark:border-dark-border-primary dark:bg-dark-bg-secondary bg-light-bg-secondary py-3.5 pl-10 pr-4 text-sm text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-light-primary-accent dark:focus:border-dark-primary-accent"
      />
    </div>
  );
}

export default Search;
