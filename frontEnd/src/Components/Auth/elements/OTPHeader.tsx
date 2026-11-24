import type { OPTHeaderProps } from "../../../Types/types";

function OTPHeader({ email }: OPTHeaderProps) {
  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight dark:text-dark-text-primary text-light-text-primary">
        Check your email
      </h1>
      <p>We've sent a 6-digit verification code</p>
      <span className="dark:text-dark-text-primary text-light-text-primary">
        {email}
      </span>
    </>
  );
}

export default OTPHeader;
