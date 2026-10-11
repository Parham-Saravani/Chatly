import { Activity, useState } from "react";
import { FiMail, FiArrowRight } from "react-icons/fi";
import Logo from "/Images/Logo.png";

function Auth() {
  const [email, setEmail] = useState("");

  return (
    <div className="flex min-h-screen items-center justify-center dark:bg-dark-bg-primary bg-light-bg-primary px-4 py-8">
      <title>Sign In | Chatly</title>
      <div className="w-full max-w-sm">
        <div className="mb-10 flex flex-col items-center text-center">
          <img
            className="mb-5 size-28 object-cover"
            src={Logo}
            alt="Chatly logo"
          />

          <h1 className="text-3xl font-bold tracking-tight dark:text-dark-text-primary text-light-text-primary">
            Welcome to Chatly
          </h1>

          <p className="mt-3 text-sm leading-6 dark:text-dark-text-secondary text-light-text-secondary">
            Enter your email to get started.
          </p>
        </div>

        <form className="space-y-5">
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium dark:text-dark-text-secondary text-light-text-secondary"
            >
              Email address
            </label>

            <div className="relative flex items-center gap-3 rounded-xl border dark:border-dark-bg-primary border-light-border-primary bg-bg-secondary transition-colors duration-300 focus-within:border-light-primary-accent dark:focus-within:border-dark-primary-accent">
              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                autoComplete="email"
                required
                className="flex-1 bg-transparent rounded-xl py-3.5 pl-10 pr-4 text-sm dark:text-dark-text-primary text-light-text-primary outline-none placeholder:text-text-mute"
              />
              <FiMail className="ml-3 absolute size-5 shrink-0 top-0 bottom-0 my-auto text-text-secondary" />
            </div>
          </div>

          <Activity mode={email.length ? 'visible' : 'hidden'}>
            <button
              type="submit"
              className='flex w-full items-center justify-center gap-2 rounded-xl dark:bg-dark-primary-accent bg-light-primary-accent py-3.5 font-medium text-dark-text-primary transition-colors duration-300 dark:hover:bg-dark-hover-accent hover:bg-light-hover-accent cursor-pointer'
            >
              Continue
              <FiArrowRight className="size-4" />
            </button>
          </Activity>
        </form>

        <p className="mt-8 text-center text-xs leading-5 dark:text-dark-text-mute text-light-text-mute">
          By continuing, you agree to Chatly's Terms of Service and Privacy
          Policy.
        </p>
      </div>
    </div>
  );
}

export default Auth;
