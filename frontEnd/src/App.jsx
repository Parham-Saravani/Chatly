import { RouterProvider } from "react-router";
import router from "./routes";
import useTheme from "./Hooks/useTheme";
import { useEffect } from "react";

function App() {
  const { syncTheme } = useTheme();
  useEffect(() => {
    syncTheme();
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
