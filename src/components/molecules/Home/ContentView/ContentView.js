import React from "react";
import { Box } from "components/atoms/Box/Box";
import { Text } from "components/atoms/Text/Text";
import { LinkedButton } from "components/atoms/Button/Button";
import Image from "components/atoms/Image/Image";
import "./ContentView.css";

export const ContentView = ({ src, to, title, description, label }) => {
  return (
    <Box className="content-container">
      <Image className="content-image" src={src} />
      <Box className="description-container">
        <Text className="heading home-title">{title}</Text>
        <Text className="sub-heading home-descrip">{description}</Text>
        <LinkedButton
          className="home-link funfac-styled"
          to={to}
          label={label}
        />
      </Box>
    </Box>
  );
};

export default ContentView;
