import { createContext, useEffect, useReducer } from "react";
import setLocalStorage from '../utilities/setLocalStorage'
export const ThemeContext = createContext();

const themReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return state === "light" ? "dark" : "light";
  }
};
function ThemeProvider({ children }) {
  const defaultTheme = localStorage.getItem("theme") || "light";
  const [theme, dispatch] = useReducer(themReducer, defaultTheme);
  useEffect(() => {
    setLocalStorage("theme", theme);
    document.documentElement.className = theme;
  }, [theme]);
  return <ThemeContext value={{ theme, dispatch }}>{children}</ThemeContext>;
}

export default ThemeProvider;
