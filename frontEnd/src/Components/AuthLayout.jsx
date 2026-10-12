import darkIcon from "/Images/Dark-Icon.png";
import lightIcon from "/Images/Light-Icon.png";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

function AuthLayout({ children }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="flex min-h-screen items-center justify-center dark:bg-dark-bg-primary bg-light-bg-primary px-4 py-8">
      <title>Sign In | Chatly</title>
      <div className="w-full max-w-sm">
        <div className="mb-10 flex flex-col items-center text-center">
          <img
            className="mb-5 size-38 object-contain"
            src={theme === "light" ? lightIcon : darkIcon}
            alt="Chatly logo"
          />

          <h1 className="text-3xl font-bold tracking-tight dark:text-dark-text-primary text-light-text-primary">
            Welcome to Chatly
          </h1>

          <p className="mt-3 text-sm leading-6 dark:text-dark-text-secondary text-light-text-secondary">
            Enter your email to get started.
          </p>
        </div>

        {children}

        <p className="mt-8 text-center text-xs leading-5 dark:text-dark-text-mute text-light-text-mute">
          By continuing, you agree to Chatly's Terms of Service and Privacy
          Policy.
        </p>
      </div>
    </div>
  );
}

export default AuthLayout;
