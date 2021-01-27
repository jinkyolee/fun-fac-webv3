import React from "react";
import Box from "components/atoms/Box/Box";
import Text from "components/atoms/Text/Text";
import "./PersonExplanation.css";

export const PersonExplanation = ({ title, body }) => {
  return (
    <Box className="exp-container">
      {title && <Text className="person-exp title">{title}</Text>}
      <Text className="person-exp">{body}</Text>
    </Box>
  );
};

export default PersonExplanation;
