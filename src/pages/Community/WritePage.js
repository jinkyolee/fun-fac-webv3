import React from "react";
import { HeaderInstance as Header } from "components/0_Instances/HeaderInstance";
import StandardPage from "components/templates/StandardPage";
import WritingForm from "components/organisms/Community/WritingForm/WritingForm";

export const WritePage = () => {
  return (
    <StandardPage
      className="fullW centered"
      header={<Header />}
      body={<WritingForm />}
    />
  );
};

export default WritePage;
