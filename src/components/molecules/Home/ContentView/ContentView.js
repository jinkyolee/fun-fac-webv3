import React from "react";
import { Box } from "components/atoms/Box/Box";
import { LinkedImage } from "components/atoms/Image/Image";
import { Text } from "components/atoms/Text/Text";
import "./ContentView.css";

export const ContentView = ({ imgSrc, to, title, description }) => {
  return (
    <Box className="content-container">
      <LinkedImage src={imgSrc} className="content-image" to={to} />
      <Box className="description-container">
        <Text className="heading">{title}</Text>
        <br />
        <Text className="sub-heading">{description}</Text>
      </Box>
    </Box>
  );
};

export default ContentView;
