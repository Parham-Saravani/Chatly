import { Navigate, Outlet } from "react-router";

function PrivateRoute() {
  if (true) {
    return <Outlet />;
  }

  return <Navigate to={"/auth"} />;
}

export default PrivateRoute;
