import { RouterProvider } from "react-router";
import router from "./routes.jsx";
import useThemeStore from "./Store/ThemeStore.jsx";
import { useEffect } from "react";

function App() {
  const theme = useThemeStore((state) => state.theme);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);
  return <RouterProvider router={router} />;
}

export default App;
