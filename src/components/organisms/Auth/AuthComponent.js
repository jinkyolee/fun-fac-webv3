import React from "react";
import Box from "components/atoms/Box/Box";
import Text from "components/atoms/Text/Text";
import {
  FacebookOAuth,
  GoogleOAuth,
  KakaoOAuth,
} from "components/molecules/Auth/AuthCntrls";

export const AuthComponent = ({ header }) => {
  return (
    <Box
      className="vertical-flex align-center"
      style={{
        marginTop: "220px",
        marginBottom: "50px",
      }}
    >
      <Text className="sub-heading" style={{ fontWeight: 500 }}>
        {header}
      </Text>
      <Box
        className="vertical-flex"
        style={{ marginTop: "50px", marginBottom: "120px" }}
      >
        <KakaoOAuth label={"로그인하기"} />
        <GoogleOAuth label={"로그인하기"} />
        {/* <FacebookOAuth label={"로그인하기"} /> */}
      </Box>
    </Box>
  );
};

export default AuthComponent;
