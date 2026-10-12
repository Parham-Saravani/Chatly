import { useEffect, useState } from "react";
import AuthLayout from "../AuthLayout";
import { FiArrowRight } from "react-icons/fi";
import { GoArrowLeft } from "react-icons/go";
import requestEmail from "../../utilities/requestEmail";

function OTPLayout({ email, setStep, setEmail }) {
  const [timer, setTimer] = useState(60);
  const [isRunning, setIsRunning] = useState(true);
  useEffect(() => {
    if (!isRunning) return;
    const timerInterval = setInterval(() => {
      setTimer((prev) => {
        if (!prev) {
          setIsRunning(false);
          clearInterval(timerInterval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [isRunning === true]);

  const calculateTimer = () => {
    const minute = Math.floor(timer / 60);
    const second = timer - minute * 60;
    return `${String(minute).padStart(2, "0")}:${String(second).padStart(2, "0")}`;
  };
  return (
    <AuthLayout
      title="Check your email"
      description={
        <>
          <p>We've sent a 6-digit verification code</p>
          <span className="dark:text-dark-text-primary text-light-text-primary">
            {email}
          </span>
        </>
      }
      footer={
        <button
          onClick={() => {
            setEmail("");
            setStep("auth");
          }}
          className="border-t dark:border-dark-border-primary border-light-border-primary pt-5 w-90"
        >
          <p className="flex items-center gap-1.5 cursor-pointer mx-auto w-30 dark:text-dark-text-secondary text-light-text-secondary dark:hover:text-dark-text-secondary/80 hover:text-light-text-secondary/80 transition-colors duration-300">
            <GoArrowLeft size={17} />
            <span>Back to sign in</span>
          </p>
        </button>
      }
    >
      <form className="space-y-5">
        <div className="flex w-100 items-center justify-center gap-2">
          <input
            className="border dark:border-dark-border-primary text-center border-light-border-primary transition-colors duration-300 dark:focus:border-dark-primary-accent focus:border-light-primary-accent outline-hidden w-14 h-14 rounded-xl"
            type="text"
            inputMode="numeric"
          />
          <input
            disabled={true}
            className="border dark:border-dark-border-primary text-center border-light-border-primary transition-colors duration-300 dark:focus:border-dark-primary-accent focus:border-light-primary-accent outline-hidden w-14 h-14 rounded-xl disabled:dark:bg-dark-bg-secondary disabled:bg-light-bg-secondary disabled:cursor-default"
            type="text"
            inputMode="numeric"
          />
          <input
            disabled={true}
            className="border dark:border-dark-border-primary text-center border-light-border-primary transition-colors duration-300 dark:focus:border-dark-primary-accent focus:border-light-primary-accent outline-hidden w-14 h-14 rounded-xl disabled:dark:bg-dark-bg-secondary disabled:bg-light-bg-secondary disabled:cursor-default"
            type="text"
            inputMode="numeric"
          />
          <input
            disabled={true}
            className="border dark:border-dark-border-primary text-center border-light-border-primary transition-colors duration-300 dark:focus:border-dark-primary-accent focus:border-light-primary-accent outline-hidden w-14 h-14 rounded-xl disabled:dark:bg-dark-bg-secondary disabled:bg-light-bg-secondary disabled:cursor-default"
            type="text"
            inputMode="numeric"
          />
          <input
            disabled={true}
            className="border dark:border-dark-border-primary text-center border-light-border-primary transition-colors duration-300 dark:focus:border-dark-primary-accent focus:border-light-primary-accent outline-hidden w-14 h-14 rounded-xl disabled:dark:bg-dark-bg-secondary disabled:bg-light-bg-secondary disabled:cursor-default"
            type="text"
            inputMode="numeric"
          />
          <input
            disabled={true}
            className="border dark:border-dark-border-primary text-center border-light-border-primary transition-colors duration-300 dark:focus:border-dark-primary-accent focus:border-light-primary-accent outline-hidden w-14 h-14 rounded-xl disabled:dark:bg-dark-bg-secondary disabled:bg-light-bg-secondary disabled:cursor-default"
            type="text"
            inputMode="numeric"
          />
        </div>

        <button
          onClick={async (event) => {
            event.preventDefault();
            sendEmailHandler(email);
          }}
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-xl dark:bg-dark-primary-accent bg-light-primary-accent py-3.5 font-medium text-dark-text-primary transition-colors duration-300 dark:hover:bg-dark-hover-accent hover:bg-light-hover-accent cursor-pointer dark:disabled:bg-dark-primary-accent/50 disabled:cursor-default disabled:bg-light-primary-accent/50"
        >
          Verify
          <FiArrowRight className="size-4" />
        </button>

        {timer === 0 ? (
          <span
            onClick={() => {
              setTimer(60);
              setIsRunning(true);
              requestEmail(email);
            }}
            className="text-center block text-sm mt-7 dark:text-dark-primary-accent text-light-primary-accent transition-colors duration-300 dark:hover:text-dark-primary-accent/80 hover:text-light-primary-accent/80 cursor-pointer"
          >
            Resend code
          </span>
        ) : (
          <p className="mt-7 text-center text-sm dark:text-dark-text-mute text-dark-text-mute">
            You can request a new code in{" "}
            <span className="mx-0.5 dark:text-dark-text-primary/80 text-light-text-primary/80">
              {calculateTimer()}
            </span>
          </p>
        )}
      </form>
    </AuthLayout>
  );
}

export default OTPLayout;
