import React from "react";
import { HeaderInstance as Header } from "../components/0_Instances/HeaderInstance";
import Image from "../components/atoms/Image/Image";
import StandardPage from "../components/templates/StandardPage";

export const Community = () => {
  return (
    <StandardPage
      className="justify-center"
      header={<Header />}
      body={<h1>Hello</h1>}
    />
  );
};

export default Community;
