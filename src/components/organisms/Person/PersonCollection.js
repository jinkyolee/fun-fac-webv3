import Box from "components/atoms/Box/Box";
import React from "react";
import "./PersonCollection.css";

export const PersonCollection = ({ personItems, label }) => {
  return (
    <Box className="collection-container">
      <Box className="container-label funfac-styled yangjin">{label}</Box>
      {personItems}
    </Box>
  );
};

export default PersonCollection;
