import React from "react";

const StandardPage = ({ header, body }) => {
  return (
    <React.Fragment>
      {header}
      {body}
    </React.Fragment>
  );
};

export default StandardPage;
