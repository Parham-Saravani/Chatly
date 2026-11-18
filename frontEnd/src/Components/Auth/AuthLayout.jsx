import darkIcon from "/Images/Dark-Icon.png";
import lightIcon from "/Images/Light-Icon.png";
import useTheme from "../../Store/ThemeStore";
function AuthLayout({
  card,
  children,
  header: Header,
  footer: Footer,
  email,
  setEmail,
  setStep,
}) {
  const { theme } = useTheme((state) => state.theme);

  return (
    <div
      className={`fixed  inset-0 flex min-h-screen items-center justify-center ${theme === "dark" ? "dark-custom-bg" : "light-custom-bg"} px-4 py-8`}
    >
      <div
        className={`animate-fadeIn w-full ${card ? "shadow-[0_0_40px_rgba(124,77,255,0.1)] dark:bg-dark-bg-primary/60  bg-light-bg-primary/60 rounded-xl !w-160 py-7 px-12 border dark:border-dark-border-primary border-light-border-primary relative before:absolute dark:before:bg-dark-primary-accent before:bg-light-primary-accent before:rounded-full before:w-30 before:h-30 before:-top-5 before:-left-10 before:-z-50 before:content-[''] before:blur-3xl after:absolute dark:after:bg-dark-primary-accent after:bg-light-primary-accent after:rounded-full after:w-30 after:h-30 after:-bottom-5 after:-right-10 after:-z-50 after:content-[''] after:blur-3xl" : "max-w-sm"}`}
      >
        <div className="mb-10 flex flex-col items-center text-center w-full">
          {!card && (
            <img
              className="mb-5 size-38 object-contain"
              src={theme === "dark" ? darkIcon : lightIcon}
              alt="Chatly logo"
            />
          )}

          <div className="mt-3 text-sm leading-6 dark:text-dark-text-secondary">
            {<Header email={email} />}
          </div>
        </div>

        {children}
        {Footer && (
          <div className="mt-8 flex items-center justify-center text-center text-xs leading-5 dark:text-dark-text-mute text-light-text-mute">
            {<Footer setEmail={setEmail} setStep={setStep} />}
          </div>
        )}
      </div>
    </div>
  );
}

export default AuthLayout;
