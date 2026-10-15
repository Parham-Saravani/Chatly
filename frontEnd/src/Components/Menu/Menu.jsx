import { useContext } from "react";
import {
  FiMessageCircle,
  FiUser,
  FiMonitor,
  FiMoon,
  FiChevronRight,
} from "react-icons/fi";
import { AuthContext } from "../../Context/AuthContext";
import useTheme from "../../Hooks/useTheme";
const menuItems = [
  {
    label: "Edit Profile",
    description: "Name, username and bio",
    icon: FiUser,
  },
  {
    label: "Appearance",
    description: "Colors and chat background",
    icon: FiMonitor,
  },
];

function Menu({ isMenuOpen }) {
  const [theme, setTheme] = useTheme();
  const { userData } = useContext(AuthContext);

  return (
    <div
      className={`h-full custom-scroll px-4 py-5 transition-all duration-300 ${
        isMenuOpen ? "w-110" : "w-19"
      }`}
    >
      <div
        className={`mb-6 flex items-center ${
          isMenuOpen ? "gap-3" : "justify-center"
        }`}
      >
        <div className="shadow-[0_0_15px] dark:shadow-dark-hover-accent/50 shadow-light-hover-accent/50 flex size-10 shrink-0 items-center justify-center rounded-full bg-light-primary-accent text-white dark:bg-dark-primary-accent">
          <FiMessageCircle size={23} />
        </div>

        {isMenuOpen && (
          <h1 className="text-xl font-bold text-light-text-primary dark:text-dark-text-primary">
            Chatly
          </h1>
        )}
      </div>

      {/* Profile */}
      <div className="mb-5 border-b border-light-border-primary pb-5 dark:border-dark-border-primary">
        <div
          className={`flex items-center ${
            isMenuOpen ? "gap-3" : "justify-center"
          }`}
        >
          <div className="relative shrink-0">
            {userData.imageUrl ? (
              <img
                src={userData.imageUrl}
                alt={userData.name}
                className="size-12 rounded-full object-cover"
              />
            ) : (
              <div className="flex size-12 items-center justify-center rounded-full bg-light-primary-accent text-lg font-semibold text-white dark:bg-dark-primary-accent">
                {userData.name.charAt(0).toUpperCase()}
              </div>
            )}

            <span className="absolute bottom-0 right-0 size-3 rounded-full border-2 border-white bg-green-500 dark:border-dark-bg-primary" />
          </div>

          {isMenuOpen && (
            <div className="min-w-0">
              <h2 className="truncate text-sm font-semibold text-light-text-primary dark:text-dark-text-primary">
                {userData.name}
              </h2>
              <p className="mt-1 truncate text-xs text-light-text-secondary dark:text-dark-text-secondary">
                @{userData.username || userData.id}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Settings */}
      {isMenuOpen && (
        <p className="mb-2 px-3 text-xs font-semibold text-light-text-mute dark:text-dark-text-mute">
          SETTINGS
        </p>
      )}

      <ul className="space-y-1">
        {menuItems.map(({ label, description, icon: Icon }) => (
          <li key={label}>
            <button
              type="button"
              title={!isMenuOpen ? label : undefined}
              className={`cursor-pointer group flex w-full items-center rounded-xl px-3 py-3 text-left transition-colors hover:bg-light-bg-secondary dark:hover:bg-dark-bg-secondary ${
                isMenuOpen ? "gap-3" : "justify-center"
              }`}
            >
              <Icon
                size={21}
                className="shrink-0 text-light-text-secondary transition-colors group-hover:text-light-primary-accent dark:text-dark-text-secondary dark:group-hover:text-dark-primary-accent"
              />

              {isMenuOpen && (
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-light-text-primary dark:text-dark-text-primary">
                    {label}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-light-text-secondary dark:text-dark-text-secondary">
                    {description}
                  </p>
                </div>
              )}

              {isMenuOpen && (
                <FiChevronRight
                  size={15}
                  className="shrink-0 text-light-text-mute dark:text-dark-text-mute"
                />
              )}
            </button>
          </li>
        ))}
      </ul>

      <div>
        <button
          type="button"
          title="ssfs"
          className={`cursor-pointer flex w-full items-center rounded-xl px-3 py-3 text-left ${
            isMenuOpen ? "gap-3" : "justify-center"
          }`}
        >
          <FiMoon
            size={21}
            className="shrink-0 text-light-text-secondary dark:text-dark-text-secondary"
          />

          {isMenuOpen && (
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-light-text-primary dark:text-dark-text-primary">
                Dark Mode
              </p>
            </div>
          )}

          {isMenuOpen && (
            <label
              htmlFor="theme"
              className="cursor-pointer dark:bg-dark-bg-secondary/50 bg-gray-200 w-11 h-5 rounded-2xl relative before:absolute before:w-3.5 before:h-3.5 before:rounded-full before:left-1 dark:before:bg-dark-bg-card before:bg-light-bg-card before:top-0 before:bottom-0 before:my-auto transition-colors duration-300 before:transition-all before:duration-300 dark:has-checked:bg-dark-primary-accent has-checked:before:bg-white has-checked:before:left-[57%] has-checked:bg-light-primary-accent"
            >
              <input checked={theme === 'dark'} onChange={setTheme} type="checkbox" hidden id="theme" />
            </label>
          )}
        </button>
      </div>
    </div>
  );
}

export default Menu;
