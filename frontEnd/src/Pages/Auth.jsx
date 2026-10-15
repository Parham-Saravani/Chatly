import { useState } from "react";
import OTPLayout from "../Components/Auth/OTPLayout";
import EmailVerificationLayout from "../Components/Auth/EmailVerificationLayout";
import UserDetailLayout from "../Components/Auth/UserDetailLayout";
import { Navigate } from "react-router";

function Auth() {
  const [email, setEmail] = useState("ir.parham@gmail.com");
  const [step, setStep] = useState("detail");

  return step === "auth" ? (
    <EmailVerificationLayout
      email={email}
      setEmail={setEmail}
      setStep={setStep}
    />
  ) : step === "otp" ? (
    <OTPLayout setEmail={setEmail} email={email} setStep={setStep} />
  ) : step === "detail" ? (
    <UserDetailLayout email={email} />
  ) : (
    <Navigate to={"/notFound"} />
  );
}

export default Auth;
