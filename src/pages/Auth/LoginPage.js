import React from "react";
import "./AuthPage.css";
import { HeaderInstance as Header } from "components/0_Instances/HeaderInstance";
import StandardPage from "components/templates/StandardPage";
import AuthComponent from "components/organisms/Auth/AuthComponent";

export const LoginPage = () => {
  return (
    <StandardPage
      className="justify-center gray"
      header={<Header />}
      body={<AuthComponent header="로그인하기" authType="login" />}
    />
  );
};

export default LoginPage;
