import { useState } from "react";
import OTPLayout from "../Components/Auth/OTPLayout";
import EmailVerificationLayout from "../Components/Auth/EmailVerificationLayout";

function Auth() {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState("auth");

  return step === "auth" ? (
    <EmailVerificationLayout
      setStep={setStep}
      email={email}
      setEmail={setEmail}
    />
  ) : (
    <OTPLayout
      setEmail={setEmail}
      email={email}
      setStep={setStep}
    />
  );
}

export default Auth;
