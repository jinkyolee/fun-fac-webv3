import React from "react";
import { Box } from "../atoms/Box/Box";

const StandardPage = ({ header, body, className, style = null }) => {
  return (
    <React.Fragment>
      {header}
      <Box className={className} style={style}>
        {body}
      </Box>
    </React.Fragment>
  );
};

export default StandardPage;
