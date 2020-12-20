import React from "react";
import Box from "../../../atoms/Box/Box";
import "./ProgressBar.css";

export const ProgressBar = ({ total, current }) => {
  console.log(current);
  return (
    <Box style={{ position: "relative", width: "125px" }}>
      <hr
        className="current-progress"
        style={
          current !== 0
            ? { width: `calc(100% * ${current}/${total})` }
            : { width: "0", border: "0px" }
        }
      />
      <hr className="total-progress" style={{ width: "100%" }} />
    </Box>
  );
};

export default ProgressBar;
