import React from "react";

export const FooterPage = ({ header, body, footer }) => {
  return (
    <React.Fragment>
      {header}
      {body}
      {footer}
    </React.Fragment>
  );
};

export default FooterPage;
