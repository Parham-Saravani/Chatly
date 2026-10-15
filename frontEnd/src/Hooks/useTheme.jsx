import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

function useTheme() {
  const { theme, dispatch } = useContext(ThemeContext);
  const setTheme = () => {
    dispatch({ type: "CHANGE_THEME" });
  };
  return [theme, setTheme];
}

export default useTheme;
