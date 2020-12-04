import React from "react";
import { HeaderInstance as Header } from "../../components/0_Instances/HeaderInstance";
import StandardPage from "../../components/templates/StandardPage";

export const StoryBook = () => {
  <StandardPage
    className="centered"
    header={<Header />}
    body={<h1>Fuck You</h1>}
  />;
};

export default StoryBook;
