import { useRef, useState } from "react";
import { FiMail, FiArrowRight } from "react-icons/fi";
import { baseUrl } from "../utilities/constants";
import { useNavigate } from "react-router";
import AuthLayout from "../Components/AuthLayout";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const sendEmailHandler = async (email) => {
  const response = await fetch(`${baseUrl}/api/user/send-code`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });
  return await response.json();
};
function Auth() {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const navigate = useNavigate();
  const emailErrorRef = useRef();

  return (
    <AuthLayout>
      <form className="space-y-5">
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium dark:text-dark-text-secondary text-light-text-secondary"
          >
            Email address
          </label>

          <div className="relative flex items-center gap-3 rounded-xl dark:bg-dark-bg-secondary bg-light-bg-secondary border dark:border-dark-border-primary border-light-border-primary bg-bg-secondary transition-colors duration-300 focus-within:border-light-primary-accent dark:focus-within:border-dark-primary-accent">
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => {
                const value = event.target.value;
                setEmail(value);
                if (emailRegex.test(value) && value) {
                  emailErrorRef.current.classList.add("hidden");
                  setIsEmailValid(true);
                } else {
                  emailErrorRef.current.classList.remove("hidden");
                  setIsEmailValid(false);
                }
              }}
              placeholder="you@example.com"
              autoComplete="email"
              required
              className="flex-1 rounded-xl py-3.5 pl-10 pr-4 text-sm dark:text-dark-text-primary text-light-text-primary outline-none placeholder:text-text-mute"
            />
            <FiMail className="ml-3 absolute size-5 shrink-0 top-0 bottom-0 my-auto text-text-secondary" />
          </div>
          <p ref={emailErrorRef} className="text-sm text-red-600 hidden">
            Please enter a valid email address.
          </p>
        </div>

        <button
          disabled={!isEmailValid}
          onClick={async (event) => {
            event.preventDefault();
            sendEmailHandler(email);
          }}
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-xl dark:bg-dark-primary-accent bg-light-primary-accent py-3.5 font-medium text-dark-text-primary transition-colors duration-300 dark:hover:bg-dark-hover-accent hover:bg-light-hover-accent cursor-pointer dark:disabled:bg-dark-primary-accent/50 disabled:cursor-default disabled:bg-light-primary-accent/50"
        >
          Continue
          <FiArrowRight className="size-4" />
        </button>
      </form>
    </AuthLayout>
  );
}

export default Auth;
