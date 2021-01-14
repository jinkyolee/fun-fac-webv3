import React from "react";
import "./AuthPage.css";
import StandardPage from "components/templates/StandardPage";
import { HeaderInstance as Header } from "components/0_Instances/HeaderInstance";
import AuthComponent from "components/organisms/Auth/AuthComponent";

export const SignupPage = () => {
  return (
    <StandardPage
      className="justify-center gray"
      header={<Header />}
      body={<AuthComponent header="회원가입하기" authType="signup" />}
    />
  );
};

export default SignupPage;
