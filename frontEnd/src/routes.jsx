import { createBrowserRouter } from "react-router";
import PrivateRoute from "./Components/PrivateRoute";
import Home from "./Pages/Home";
import Chat from "./Pages/Chat";
const router = createBrowserRouter([
  {
    element: <PrivateRoute />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/chat/:id",
            element: <Chat />,
          },
        ],
      },
    ],
  },
]);

export default router;
