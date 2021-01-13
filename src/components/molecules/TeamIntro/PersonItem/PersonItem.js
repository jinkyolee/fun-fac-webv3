import React from "react";
import Box from "components/atoms/Box/Box";
import Image from "components/atoms/Image/Image";
import Text from "components/atoms/Text/Text";
import "./PersonItem.css";

export const PersonItem = ({ name, imageSrc, job }) => {
  return (
    <Box className="vertical-flex align-center profile">
      <Image src={imageSrc} className="profile-img" alt={name} />
      <Box className="profile-descrip funfac-styled">
        <Text className="bold">{name}</Text>
        <Text className="body">{job}</Text>
      </Box>
    </Box>
  );
};

export default PersonItem;
