import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import AuthLayout from "./AuthLayout";
import { FiArrowRight } from "react-icons/fi";
import requestEmail from "../../utilities/requestEmail";
import OTPInputs from "./OTPInputs";
import toast from "react-hot-toast";
import { baseUrl } from "../../utilities/constants.js";
import AuthBtutton from "./AuthBtutton";
import OTPFooter from "./elements/OTPFooter";
import OTPHeader from "./elements/OTPHeader";
import { useNavigate } from "react-router";
import { setCookie } from "../../utilities/cookie";
import useAuth from "../../Store/AuthStore";

interface Messages {
  [key: string]: string;
}
const messages: Messages = {
  CODE_NOT_MATCH: "The verification code is incorrect.",
  TIME_PASSED: "The verification code has expired. Please request a new one.",
  OTP_NOT_FOUND: "No verification code found. Please request a new one.",
  NOT_VALID_CODE: "Please enter a valid 6-digit verification code.",
  EMAIL_NOT_VALID: "Please enter a valid email address.",
  INTERNAL_SERVER_ERROR: "Something went wrong. Please try again later.",
};

const otpMessages: Messages = {
  EMAIL_NOT_VALID: "Please enter a valid email address.",
  TRY_ONE_MINUTE_LATER:
    "Please wait one minute before requesting another code.",
};

type OTPLayoutProps = {
  email: string;
  setStep: Dispatch<SetStateAction<string>>;
  setEmail: Dispatch<SetStateAction<string>>;
};
function OTPLayout({ email, setStep, setEmail }: OTPLayoutProps) {
  const changeUserData = useAuth((state) => state.changeUserData);
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [timer, setTimer] = useState(0);
  const [resetInputs, setResetInputs] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [isSending, setIsSending] = useState(false);

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

  const codeVerifierHandler = async () => {
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
      const { message, userStatus, userData, token } = await response.json();

      if (message === "VERIFIED" && userStatus === "registerd") {
        changeUserData(userData);
        setCookie("auth-token", token);
        return navigate("/", { replace: true });
      } else if (message === "VERIFIED" && userStatus === "not_registerd") {
        return setStep("detail");
      }
      const currentMessage = messages[message];
      if (currentMessage) {
        toast.error(currentMessage);
      } else {
        console.error("message not found");
      }
      setResetInputs(true);
    } catch (error) {
      toast.error("Something happend, please try again.");
    }
  };
  const calculateTimer = () => {
    const minute = Math.floor(timer / 60);
    const second = timer - minute * 60;
    return `${String(minute).padStart(2, "0")}:${String(second).padStart(2, "0")}`;
  };
  return (
    <>
      <title>Verify Code | Chatly</title>
      <AuthLayout
        header={OTPHeader}
        footer={OTPFooter}
        email={email}
        setEmail={setEmail}
        setStep={setStep}
      >
        <form
          action={() => {
            codeVerifierHandler();
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
            <button
              disabled={isSending}
              onClick={async () => {
                setIsSending(true);
                const responst = await requestEmail(email);
                if (responst.message === "EMAIL_SENT") {
                  setTimer(120);
                  setIsRunning(true);
                  setIsSending(false);
                  return;
                }
                const currentMessage = otpMessages[responst.message];
                if (currentMessage) {
                  toast.error(currentMessage);
                } else {
                  console.error("message not found");
                }
              }}
              className="w-full disabled:cursor-default dark:disabled:text-dark-primary-accent/80 disabled:text-light-primary-accent/80 text-center block text-sm mt-7 dark:text-dark-primary-accent text-light-primary-accent transition-colors duration-300 dark:hover:text-dark-primary-accent/80 hover:text-light-primary-accent/80 cursor-pointer"
            >
              {isSending ? "Sending..." : "Resend code"}
            </button>
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
    </>
  );
}

export default OTPLayout;
