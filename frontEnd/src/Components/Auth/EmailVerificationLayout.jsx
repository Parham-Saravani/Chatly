import { useRef, useState } from "react";
import AuthLayout from "../AuthLayout";
import { FiArrowRight, FiMail } from "react-icons/fi";
import AuthBtutton from "./AuthBtutton";
import requestEmail from "../../utilities/requestEmail";
import toast from "react-hot-toast";
import EmailVerificationFooter from "./elements/EmailVerificationFooter";
import EmailVerificationHeader from "./elements/EmailVerificationHeader";
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const messages = {
  TRY_ONE_MINUTE_LATER:
    "Please wait one minute before requesting another code.",
  EMAIL_NOT_VALID: "Please enter a valid email address.",
};

function EmailVerificationLayout({ email, setEmail, setStep }) {
  const [isEmailValid, setIsEmailValid] = useState(false);
  const emailErrorRef = useRef();

  return (
    <AuthLayout
      header={EmailVerificationHeader}
      footer={EmailVerificationFooter}
    >
      <form
        action={async () => {
          const emailStatus = await requestEmail(email);
          if (emailStatus.message === "EMAIL_SENT") {
            setStep("otp");
            return;
          }
          toast.error(messages[emailStatus.message]);
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

        <AuthBtutton condition={isEmailValid}>
          Continue
          <FiArrowRight className="size-4" />
        </AuthBtutton>
      </form>
    </AuthLayout>
  );
}

export default EmailVerificationLayout;
