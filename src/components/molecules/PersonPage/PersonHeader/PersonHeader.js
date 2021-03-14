import React from "react";
import Box from "components/atoms/Box/Box";
import Text from "components/atoms/Text/Text";
import "./PersonHeader.css";

export const PersonHeader = ({ title, subtitle, device }) => {
  return (
    <Box className={`header-banner ${device}`}>
      <Text
        className="body"
        style={{ marginBottom: "20px", fontSize: "18px", color: "white" }}
      >
        {subtitle}
      </Text>
      <Text className="header-title">{title}</Text>
    </Box>
  );
};

export default PersonHeader;
