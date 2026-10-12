import { useRef, useState } from "react";
import AuthLayout from "../AuthLayout";
import { FiMail } from "react-icons/fi";
import AuthBtutton from "./AuthBtutton";
import requestEmail from "../../utilities/requestEmail";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function EmailVerificationLayout({ email, setEmail, setStep }) {
  const [isEmailValid, setIsEmailValid] = useState(false);
  const emailErrorRef = useRef();

  return (
    <AuthLayout
      title="Welcome back to Chatly"
      description={<p>Enter your email to get started.</p>}
      footer={
        <p>
          By continuing, you agree to Chatly's Terms of Service and Privacy
          Policy.
        </p>
      }
    >
      <form
        action={async () => {
          const emailStatus = await requestEmail(email);
          if (emailStatus.message === "EMAIL_SENT") {
            setStep("otp");
          }
        }}
        className="space-y-5"
      >
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
              className="flex-1 rounded-xl py-3.5 pl-11 pr-4 text-sm dark:text-dark-text-primary text-light-text-primary outline-none placeholder:text-text-mute"
            />
            <FiMail className="ml-3 absolute size-5 shrink-0 top-0 bottom-0 my-auto text-text-secondary" />
          </div>
          <p ref={emailErrorRef} className="text-sm text-red-600 hidden">
            Please enter a valid email address.
          </p>
        </div>

        <AuthBtutton isEmailValid={isEmailValid} />
      </form>
    </AuthLayout>
  );
}

export default EmailVerificationLayout;
