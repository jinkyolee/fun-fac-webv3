import React from "react";
import Box, { LinkedBox } from "components/atoms/Box/Box";
import Image from "components/atoms/Image/Image";
import Text from "components/atoms/Text/Text";
import "./PersonThumbnail.css";

export const PersonThumbnail = ({ src, title, subtitle, to, type }) => {
  return (
    <LinkedBox
      className={`thumbnail-container ${type}`}
      to={`/persons/post?id=${to}`}
    >
      <Image src={src} className="thumbnail-img" />
      <Text className="thumbnail-text title">{title}</Text>
      <Text className="thumbnail-text sub">{subtitle}</Text>
    </LinkedBox>
  );
};

export const PreparingThumbnail = ({ type }) => {
  return (
    <Box className={`thumbnail-container preparing ${type}`}>
      다음 주인공은
      <br />
      누구일까요? 🤔
    </Box>
  );
};

export default PersonThumbnail;
