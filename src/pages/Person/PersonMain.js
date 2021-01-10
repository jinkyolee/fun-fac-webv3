import React from "react";
import { HeaderInstance as Header } from "components/0_Instances/HeaderInstance";
import StandardPage from "components/templates/StandardPage";

export const PersonMain = () => {
  return <StandardPage header={<Header />} body={<h1>Fuck</h1>} />;
};

export default PersonMain;
