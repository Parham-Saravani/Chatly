import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import {AuthContext} from "../Context/AuthContext";

function PrivateRoute() {
  const { userData, dispatch } = useContext(AuthContext);
  if (Object.keys(userData).length) {
    return <Outlet />;
  }

  return <Navigate to={"/auth"} />;
}

export default PrivateRoute;
