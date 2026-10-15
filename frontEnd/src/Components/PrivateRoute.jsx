import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { AuthContext } from "../Context/AuthContext";

function PrivateRoute() {
  const { userData, isAuthLoading } = useContext(AuthContext);

  if (isAuthLoading) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-light-bg-primary dark:bg-dark-bg-primary">
        {/* Loading Content */}
        <div className="flex flex-col items-center">
          <p className="text-2xl font-semibold tracking-tight text-light-text-primary dark:text-dark-text-primary">
            Chat
            <span className="text-light-primary-accent dark:text-dark-primary-accent">
              ly
            </span>
          </p>

          <p className="mt-3 text-sm text-light-text-secondary dark:text-dark-text-secondary">
            Getting things ready
          </p>

          {/* Progress Line */}
          <div className="relative mt-8 h-[3px] w-40 overflow-hidden rounded-full bg-light-border-primary dark:bg-dark-border-primary">
            <div className="absolute inset-y-0 w-1/2 animate-line rounded-full bg-light-primary-accent dark:bg-dark-primary-accent" />
          </div>
        </div>
      </div>
    );
  }

  if (Object.keys(userData).length) {
    return <Outlet />;
  }

  return <Navigate to="/auth" replace />;
}

export default PrivateRoute;
