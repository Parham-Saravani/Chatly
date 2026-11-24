import { Navigate, Outlet } from "react-router";
import useAuthentication from "../Hooks/useAuthentication";
import useAuth from "../Store/AuthStore";
import lightLogo from "/Images/light-logo-no-text.png";
import darkLogo from "/Images/dark-logo-no-text.png";
import useThemeStore from "../Store/ThemeStore";
import { useEffect } from "react";

function PrivateRoute() {
  const theme = useThemeStore((state) => state.theme);
  const { isLoading, takeUserData } = useAuthentication();
  const userData = useAuth((state) => state.userData);
  
  useEffect(() => {
    (async () => {
      takeUserData()
    })()
  } , [])

  if (isLoading) {
    return (
      <div
        className={`${theme === "dark" ? "dark-custom-bg" : "light-custom-bg"} fixed inset-0 z-50 flex items-center justify-center bg-light-bg-primary backdrop-blur-xl dark:bg-dark-bg-primary`}
      >
        <div className="animate-fadeIn flex justify-center items-center flex-col bg-light-bg-card rounded-xl py-8 w-60 dark:bg-dark-bg-secondary/70">
          <img
            className="size-16 object-contain"
            src={theme === "dark" ? darkLogo : lightLogo}
            alt="Chatly"
          />

          <p className="mt-3 text-sm font-medium tracking-wide text-light-text-secondary dark:text-dark-text-secondary">
            Getting things ready
            <span className="ml-1 animate-pulse">...</span>
          </p>

          <div className="mt-4 aspect-square w-3.5 h-3.5 rounded-full animate-loader"></div>
        </div>
      </div>
    );
  }

  if (userData && Object.keys(userData)?.length) {
    return <Outlet />;
  }

  return <Navigate to="/auth" replace />;
}

export default PrivateRoute;
