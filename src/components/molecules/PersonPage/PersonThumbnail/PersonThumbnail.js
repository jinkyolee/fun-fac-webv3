import React from "react";
import Box, { LinkedBox } from "components/atoms/Box/Box";
import Image from "components/atoms/Image/Image";
import Text from "components/atoms/Text/Text";
import "./PersonThumbnail.css";

export const PersonThumbnail = ({ src, title, subtitle, to }) => {
  return (
    <LinkedBox className="thumbnail-container" to={`/persons/post?id=${to}`}>
      <Image src={src} className="thumbnail-img" />
      <Text className="thumbnail-text title">{title}</Text>
      <Text className="thumbnail-text sub">{subtitle}</Text>
    </LinkedBox>
  );
};

export const PreparingThumbnail = () => {
  return (
    <Box className="preparing-container">
      다음 주인공은
      <br />
      누구일까요? 🤔
    </Box>
  );
};

export default PersonThumbnail;
