import React from "react";
import StandardPage from "components/templates/StandardPage";
import HeaderInstance from "components/0_Instances/HeaderInstance";

export const Loading = () => {
  return (
    <StandardPage
      className="full centered"
      header={<HeaderInstance />}
      body={
        <span
          style={{
            fontSize: "50px",
          }}
        >
          Loading...
        </span>
      }
    />
  );
};

export default Loading;
