import Box from "components/atoms/Box/Box";
import React from "react";
import "./PersonCollection.css";

export const PersonCollection = ({ personItems, label, device }) => {
  let boxClass, labelClass;
  if (device === "small") {
    boxClass = "collection-container mobile";
    labelClass = "container-label funfac-styled yangjin centered mobile";
  } else {
    boxClass = "collection-container";
    labelClass = "container-label funfac-styled yangjin";
  }

  return (
    <Box className={boxClass}>
      <Box className={labelClass}>{label}</Box>
      {personItems}
    </Box>
  );
};

export default PersonCollection;
