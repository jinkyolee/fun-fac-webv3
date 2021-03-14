import React from "react";
import Box from "components/atoms/Box/Box";
import Image from "components/atoms/Image/Image";
import Text from "components/atoms/Text/Text";
import "./ExplanationImage.css";

export const ExplanationImage = ({ src, subtext, width = "100%", height }) => {
  return (
    <Box className="exp-img-container" style={{ width: width, height: height }}>
      <Image
        className="exp-img"
        src={src}
        style={{ width: "100%", height: height }}
      />
      <Text className="sub-body">{subtext}</Text>
    </Box>
  );
};

export default ExplanationImage;
