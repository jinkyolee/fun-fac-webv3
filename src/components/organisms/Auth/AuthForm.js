import React, { useState } from "react";
import { authService } from "fbaseInst/fbase";
import {
  EmailInput,
  PasswordInput,
  SubmitAuth,
} from "components/molecules/Auth/AuthCntrls";
import Box from "components/atoms/Box/Box";
import "./AuthForm.css";
import Text from "components/atoms/Text/Text";

const onChange = ({ target: { value } }, setFunction) => {
  setFunction(value);
};

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onClick = (e) => {
    e.preventDefault();
    const loginPromise = authService.signInWithEmailAndPassword(
      email,
      password
    );
    loginPromise
      .then(() => {
        window.history.back();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

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
        {error ? <Text className="auth-error">{error}</Text> : null}
        <SubmitAuth onClick={onClick} label="로그인하기" />
      </Box>
    </form>
  );
};

export const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onClick = (e) => {
    e.preventDefault();
    const loginPromise = authService.createUserWithEmailAndPassword(
      email,
      password
    );
    loginPromise
      .then(() => {
        window.history.back();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

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
        {error ? <Text className="auth-error">{error}</Text> : null}
        <SubmitAuth onClick={onClick} label="회원 가입하기" />
      </Box>
    </form>
  );
};
