import React from "react";
import { HeaderInstance as Header } from "components/0_Instances/HeaderInstance";
import StandardPage from "components/templates/StandardPage";
import { LoginForm } from "components/organisms/Auth/AuthForm";

export const LoginPage = () => {
  return (
    <StandardPage
      className="centered full"
      header={<Header />}
      body={<LoginForm />}
    />
  );
};

export default LoginPage;
