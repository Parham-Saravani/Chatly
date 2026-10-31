import useThemeStore from "../Store/ThemeStore";

const changeHTMLClassList = (value) => {
  if (value === "light") {
    document.documentElement.classList.remove("dark");
    return;
  }
  document.documentElement.classList.add("dark");
};

function useTheme() {
  const theme = useThemeStore((state) => state.theme);
  const storeChangeTheme = useThemeStore((state) => state.changeTheme);
  const changeTheme = () => {
    const finalTheme = theme === "light" ? "dark" : "light";
    storeChangeTheme(finalTheme);
    localStorage.setItem("theme", finalTheme);
    changeHTMLClassList(finalTheme);
  };
  const syncTheme = () => {
    const localTheme = localStorage.getItem("theme") || "light";
    storeChangeTheme(localTheme);
    changeHTMLClassList(localTheme);
  };
  return { syncTheme, changeTheme };
}

export default useTheme;
