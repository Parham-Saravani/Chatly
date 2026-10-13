import darkIcon from "/Images/Dark-Icon.png";
import lightIcon from "/Images/Light-Icon.png";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

function AuthLayout({
  children,
  header: Header,
  footer: Footer,
  email,
  setEmail,
  setStep,
}) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="flex min-h-screen items-center justify-center dark:bg-dark-bg-primary bg-light-bg-primary px-4 py-8">
      <title>Sign In | Chatly</title>
      <div className="animate-fadeIn w-full max-w-sm">
        <div className="mb-10 flex flex-col items-center text-center">
          <img
            className="mb-5 size-38 object-contain"
            src={theme === "light" ? lightIcon : darkIcon}
            alt="Chatly logo"
          />

          <div className="mt-3 text-sm leading-6 dark:text-dark-text-secondary text-light-text-secondary">
            {<Header email={email} />}
          </div>
        </div>

        {children}
        <div className="mt-8 flex items-center justify-center text-center text-xs leading-5 dark:text-dark-text-mute text-light-text-mute">
          {<Footer setEmail={setEmail} setStep={setStep} />}
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
