import React from "react";
import { Box } from "../atoms/Box/Box";

const StandardPage = ({ header, children, className, style = null }) => {
  return (
    <React.Fragment>
      {header}
      <Box className={className} style={style}>
        {children}
      </Box>
    </React.Fragment>
  );
};

export default StandardPage;
