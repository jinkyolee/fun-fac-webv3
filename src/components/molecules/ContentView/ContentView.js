import React from "react";
import { Box } from "../../atoms/Box/Box";
import { LinkedImage } from "../../atoms/ImageComp/ImageComp";
import { Text } from "../../atoms/Text/Text";
import "./ContentView.css";

export const ContentView = ({ imgSrc, to, title, description }) => {
  return (
    <Box className="content-container">
      <LinkedImage src={imgSrc} alt="" className="content-image" to={to} />
      <Box className="description-container">
        <Text className="heading">{title}</Text>
        <br />
        <Text className="sub-heading">{description}</Text>
      </Box>
    </Box>
  );
};
