import React, { useState } from "react";
import {
  EmailInput,
  PasswordInput,
  SubmitAuth,
} from "components/molecules/Auth/AuthCntrls";
import "./AuthForm.css";

const onChange = ({ target: { value } }, setFunction) => {
  setFunction(value);
  console.log(value);
};

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form name="login" className="auth-form">
      <EmailInput
        label={"이메일"}
        onChange={(e) => onChange(e, setEmail)}
        value={email}
      />
      <PasswordInput
        label={"비밀번호"}
        onChange={(e) => onChange(e, setPassword)}
        value={password}
      />
      <SubmitAuth
        onClick={(e) => {
          e.preventDefault();
          console.log(e);
        }}
        label="로그인하기"
      />
    </form>
  );
};

export const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form name="signup" className="auth-form">
      <EmailInput
        label={"이메일"}
        onChange={(e) => onChange(e, setEmail)}
        value={email}
      />
      <PasswordInput
        label={"비밀번호"}
        onChange={(e) => onChange(e, setPassword)}
      />
      <SubmitAuth
        onClick={(e) => {
          e.preventDefault();
          console.log(e);
        }}
        label="회원 가입하기"
      />
    </form>
  );
};
