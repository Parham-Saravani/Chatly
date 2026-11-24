import type { SetStateAction, Dispatch } from "react";
import { GoArrowLeft } from "react-icons/go";
import type { OTPFooterProps } from "../../../Types/types";

function OTPFooter({ setEmail, setStep }: OTPFooterProps) {
  return (
    <button
      onClick={() => {
        setEmail?.("");
        setStep?.("auth");
      }}
      className="border-t dark:border-dark-border-primary border-light-border-primary pt-5 w-90"
    >
      <p className="flex items-center gap-1.5 cursor-pointer mx-auto w-30 dark:text-dark-text-secondary text-light-text-secondary dark:hover:text-dark-text-secondary/80 hover:text-light-text-secondary/80 transition-colors duration-300">
        <GoArrowLeft size={17} />
        <span>Back to sign in</span>
      </p>
    </button>
  );
}

export default OTPFooter;
