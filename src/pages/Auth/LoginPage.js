import React from "react";
import { HeaderInstance as Header } from "components/0_Instances/HeaderInstance";
import StandardPage from "components/templates/StandardPage";
import { LoginForm } from "components/organisms/Auth/AuthForm";
import AuthComponent from "components/organisms/Auth/AuthComponent";

export const LoginPage = () => {
  return (
    <StandardPage
      className="justify-center gray"
      header={<Header />}
      body={<AuthComponent header="로그인하기" authType="login" />}
      style={{ backgroundColor: "#F9F9F9" }}
    />
  );
};

export default LoginPage;
