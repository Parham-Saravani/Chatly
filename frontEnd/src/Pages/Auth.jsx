import { useState } from "react";
import OTPLayout from "../Components/Auth/OTPLayout";
import EmailVerificationLayout from "../Components/Auth/EmailVerificationLayout";
import UserDetailLayout from "../Components/Auth/UserDetailLayout";

function Auth() {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState("auth");

  return step === "auth" ? (
    <EmailVerificationLayout
      setStep={setStep}
      email={email}
      setEmail={setEmail}
    />
  ) : step === "otp" ? (
    <OTPLayout setEmail={setEmail} email={email} setStep={setStep} />
  ) : (
    <UserDetailLayout />
  );
}

export default Auth;
