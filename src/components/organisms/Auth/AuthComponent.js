import React, { useState } from "react";
import { LoginForm, SignupForm } from "components/organisms/Auth/AuthForm";
import Box from "components/atoms/Box/Box";
import Text from "components/atoms/Text/Text";
import {
  FacebookOAuth,
  GoogleOAuth,
  KakaoOAuth,
} from "components/molecules/Auth/AuthCntrls";
import Button from "components/atoms/Button/Button";

export const AuthComponent = ({ header, authType }) => {
  let text, form;
  const [emailSelected, setSelectState] = useState(false);

  if (authType === "login") {
    text = "로그인";
    form = <LoginForm />;
  } else {
    text = "회원가입";
    form = <SignupForm />;
  }

  return (
    <Box
      className="vertical-flex align-center"
      style={{
        marginTop: "140px",
        marginBottom: "50px",
      }}
    >
      <Text className="sub-heading" style={{ fontWeight: 500 }}>
        {header}
      </Text>
      {emailSelected ? form : null}
      <Box
        className="vertical-flex"
        style={
          emailSelected
            ? { marginTop: "50px" }
            : { marginTop: "50px", marginBottom: "120px" }
        }
      >
        {!emailSelected ? (
          <Button
            className="auth-btn email"
            label={`이메일로 ${text}하기`}
            onClick={() => setSelectState(true)}
          />
        ) : null}
        <KakaoOAuth />
        <GoogleOAuth />
        <FacebookOAuth />
      </Box>
    </Box>
  );
};

export default AuthComponent;
