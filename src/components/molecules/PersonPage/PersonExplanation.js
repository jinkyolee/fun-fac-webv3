import React from "react";
import Box from "../../atoms/Box/Box";
import Text from "../../atoms/Text/Text";
import "./PersonExplanation.css";

export const PersonExplanation = ({ title, body }) => {
  return (
    <Box className="exp-container vertical-flex">
      <Text className="person-exp title">{title}</Text>
      <Text className="person-exp" Type="pre">
        {body}
      </Text>
    </Box>
  );
};

export default PersonExplanation;
