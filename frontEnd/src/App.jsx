import { RouterProvider } from "react-router";
import router from "./routes";
import ThemeProvider from "./Context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
