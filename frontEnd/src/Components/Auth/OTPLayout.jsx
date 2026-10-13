import { useEffect, useRef, useState } from "react";
import AuthLayout from "../AuthLayout";
import { FiArrowRight } from "react-icons/fi";
import requestEmail from "../../utilities/requestEmail";
import OTPInputs from "./OTPInputs";
import toast from "react-hot-toast";
import { baseUrl } from "../../utilities/constants";
import AuthBtutton from "./AuthBtutton";
import OTPFooter from "./elements/OTPFooter";
import OTPHeader from "./elements/OTPHeader";

const messages = {
  CODE_NOT_MATCH: "The verification code is incorrect.",
  TIME_PASSED: "The verification code has expired. Please request a new one.",
  OTP_NOT_FOUND: "No verification code found. Please request a new one.",
  NOT_VALID_CODE: "Please enter a valid 6-digit verification code.",
  EMAIL_NOT_VALID: "Please enter a valid email address.",
  INTERNAL_SERVER_ERROR: "Something went wrong. Please try again later.",
};

const codeVerifierHandler = async (code, email, setResetInputs, setStep) => {
  try {
    const response = await fetch(`${baseUrl}/api/user/verify-code`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code, email }),
    });
    if (!response.ok) {
      toast.error("We got Error");
      return;
    }
    const data = await response.json();
    if (data.message === "VERIFIED") {
      setStep("detail");
    } else {
      toast.error(messages[data.message]);
      setResetInputs(true);
    }
  } catch (error) {}
};

function OTPLayout({ email, setStep, setEmail }) {
  const [code, setCode] = useState("");
  const [timer, setTimer] = useState(0);
  const [resetInputs, setResetInputs] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;
    setResetInputs(true);
    setCode("");
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
  }, [isRunning]);

  const calculateTimer = () => {
    const minute = Math.floor(timer / 60);
    const second = timer - minute * 60;
    return `${String(minute).padStart(2, "0")}:${String(second).padStart(2, "0")}`;
  };
  return (
    <AuthLayout
      header={OTPHeader}
      footer={OTPFooter}
      email={email}
      setEmail={setEmail}
      setStep={setStep}
    >
      <form
        action={() => {
          codeVerifierHandler(code, email, setResetInputs, setStep);
        }}
        className="space-y-5"
      >
        <OTPInputs
          setResetInputs={setResetInputs}
          resetInputs={resetInputs}
          setCode={setCode}
        />

        <AuthBtutton condition={code.length === 6}>
          Verify
          <FiArrowRight className="size-4" />
        </AuthBtutton>

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
