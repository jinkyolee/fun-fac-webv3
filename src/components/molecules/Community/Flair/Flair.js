import React from "react";
import Box from "../../../atoms/Box/Box";
import Text from "../../../atoms/Text/Text";
import "./Flair.css";

export const Flair = ({ type }) => {
  let text;

  if (type === "palace") {
    text = "고궁";
  } else {
    text = "게임";
  }

  return (
    <Box className={`flair ${type}`}>
      <Text className="flair-text">{text}</Text>
    </Box>
  );
};

export default Flair;
