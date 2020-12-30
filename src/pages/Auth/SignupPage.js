import React from "react";
import StandardPage from "components/templates/StandardPage";
import { HeaderInstance as Header } from "components/0_Instances/HeaderInstance";
import { SignupForm } from "components/organisms/Auth/AuthForm";

export const SignupPage = () => {
  return (
    <StandardPage
      className="centered full"
      header={<Header />}
      body={<SignupForm />}
    />
  );
};

export default SignupPage;
