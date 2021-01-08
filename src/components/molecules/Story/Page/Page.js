import React from "react";
import Box from "componenets/atoms/Box/Box";

export const Page = ({ children }) => {
  return <Box className="align-center">{children}</Box>;
};

export const FooterPage = ({ children, footerContent }) => {
  return (
    <React.Fragment>
      <Box className="page">{children}</Box>
      <span>{footerContent}</span>
    </React.Fragment>
  );
};

export default Page;
