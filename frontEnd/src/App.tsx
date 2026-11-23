import { RouterProvider } from "react-router";
import router from "./routes.jsx";
import useTheme from "./Hooks/useTheme.jsx";
import { useEffect } from "react";

function App() {
 
  return <RouterProvider router={router} />;
}

export default App;
