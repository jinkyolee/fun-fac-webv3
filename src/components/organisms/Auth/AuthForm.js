import React, { useState } from "react";
import { authService } from "firebase/fbase";
import {
  EmailInput,
  PasswordInput,
  SubmitAuth,
} from "components/molecules/Auth/AuthCntrls";
import Box from "components/atoms/Box/Box";
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
      <Box className="auth-input-container">
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
            authService.signInWithEmailAndPassword(email, password);
          }}
          label="로그인하기"
        />
      </Box>
    </form>
  );
};

export const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form name="signup" className="auth-form">
      <Box className="auth-input-container">
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
            authService.createUserWithEmailAndPassword(email, password);
          }}
          label="회원 가입하기"
        />
      </Box>
    </form>
  );
};
