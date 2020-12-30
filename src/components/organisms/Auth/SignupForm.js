import React from "react";
import { EmailInput, PasswordInput } from "components/atoms/Input/Input";
import "./AuthForm.css";

export const SignupForm = () => {
  return (
    <form name="signup" className="auth-form">
      <EmailInput placeholder={"이메일"} onChange={(e) => console.log(e)} />
      <PasswordInput
        placeholder={"비밀번호"}
        onChange={(e) => console.log(e)}
      />
    </form>
  );
};

export default SignupForm;
