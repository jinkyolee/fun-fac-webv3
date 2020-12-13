import React from "react";
import { Box } from "../../atoms/Box/Box";
import { Image } from "../../atoms/ImageComp/ImageComp";
import { Text } from "../../atoms/Text/Text";
import "./PersonItem.css";

export const PersonItem = ({ name, imageSrc, job }) => {
  return (
    <Box className="vertical-flex align-center profile">
      <Image
        src={imageSrc}
        className="round"
        style={{ width: "125px" }}
        alt={name}
      />
      <Text className="body bold" style={{ marginTop: "20px" }}>
        {name}
      </Text>
      <Text style={{ marginTop: "10px", fontSize: "10px" }}>{job}</Text>
    </Box>
  );
};

export default PersonItem;
