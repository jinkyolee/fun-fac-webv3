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
  let label, form;
  const [emailSelected, setSelectState] = useState(false);

  if (authType === "login") {
    label = "로그인";
    form = <LoginForm />;
  } else {
    label = "회원가입";
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
            ? { marginTop: "50px", marginBottom: "60px" }
            : { marginTop: "50px", marginBottom: "120px" }
        }
      >
        {!emailSelected ? (
          <Button
            className="auth-btn email"
            label={`이메일로 ${label}하기`}
            onClick={() => setSelectState(true)}
          />
        ) : null}
        <KakaoOAuth label={label} />
        <GoogleOAuth label={label} />
        <FacebookOAuth label={label} />
      </Box>
    </Box>
  );
};

export default AuthComponent;
