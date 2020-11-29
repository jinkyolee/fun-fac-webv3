import React from "react";
import { Box } from "../../atoms/Box/Box";
import { Image } from "../../atoms/ImageComp/ImageComp";
import { Text } from "../../atoms/Text/Text";
import "./PersonItem.css";

export const PersonItem = ({ name, imageSrc, job }) => {
  return (
    <Box className="vertical-flex align-center profile">
      <Image src={imageSrc} className="medium round" alt={name} />
      <Text className="bold" style={{ fontSize: "15px", marginTop: "20px" }}>
        {name}
      </Text>
      <Text className="body" style={{ marginTop: "10px" }}>
        {job}
      </Text>
    </Box>
  );
};
