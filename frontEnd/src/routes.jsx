import { createBrowserRouter } from "react-router";
import PrivateRoute from "./Components/PrivateRoute";
import Home from "./Pages/Home";
import ChatPage from "./Pages/ChatPage";
import Authentication from "./Pages/Authentication";
import MainLayout from "./Layouts/MainLayout";
const router = createBrowserRouter([
  {
    element: <PrivateRoute />,
    children: [
      {
        path: "/",
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "/chat",
            element: <ChatPage />,
          },
        ],
      },
    ],
  },
  {
    path: "/auth",
    element: <Authentication />,
  },
]);

export default router;
