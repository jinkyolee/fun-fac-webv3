import React from "react";
import "./AuthCntrls.css";
import { kakaoIcon, googleIcon, facebookIcon } from "assets/svg/svgExport";
import Box, { LinkedBox } from "components/atoms/Box/Box";
import { InputButton, TextInput } from "components/atoms/Input/Input";
import Image from "components/atoms/Image/Image";

export const EmailInput = ({ onChange, label, value }) => {
  return (
    <Box className="input-container">
      <label className="auth-label" htmlFor="email">
        {label}
      </label>
      <TextInput
        onChange={onChange}
        label={value}
        className="auth-input"
        name="email"
        required={true}
      />
    </Box>
  );
};

export const PasswordInput = ({ onChange, label, value }) => {
  return (
    <Box className="input-container">
      <label className="auth-label" htmlFor="password">
        {label}
      </label>
      <TextInput
        onChange={onChange}
        label={value}
        className="auth-input"
        name="password"
        required={true}
      />
    </Box>
  );
};

export const SubmitAuth = ({ onClick, label }) => {
  return (
    <InputButton
      className="auth-submit"
      name="auth-submit"
      onClick={onClick}
      label={label}
    />
  );
};

const OAuth = ({ to, svg, label, className }) => {
  return (
    <LinkedBox
      to={to}
      className={`justify-center align-center auth-btn ${className}`}
    >
      <Image
        src={svg}
        style={{
          width: "30px",
          marginRight: "15px",
          objectFit: "contain",
        }}
      />
      {label}
    </LinkedBox>
  );
};

export const KakaoOAuth = () => {
  return (
    <OAuth
      to="/kakao"
      svg={kakaoIcon}
      label="카카오톡 로그인"
      className="kakao"
    />
  );
};

export const GoogleOAuth = () => {
  return (
    <OAuth
      to="/google"
      svg={googleIcon}
      label="구글 로그인"
      className="google"
    />
  );
};

export const FacebookOAuth = () => {
  return (
    <OAuth
      to="/facebook"
      svg={facebookIcon}
      label="페이스북 로그인"
      className="facebook"
    />
  );
};
