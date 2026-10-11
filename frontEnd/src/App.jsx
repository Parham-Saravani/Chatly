import { RouterProvider } from "react-router";
import router from "./routes";
import ThemeProvider from "./Context/ThemeContext";
import AuthProvider from "./Context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
