import AuthLayout from "../AuthLayout";

function UserDetailLayout() {
  <AuthLayout
    header={OTPHeader}
    footer={OTPFooter}
    email={email}
    setEmail={setEmail}
    setStep={setStep}
  >
    <form></form>
  </AuthLayout>;
}

export default UserDetailLayout;
