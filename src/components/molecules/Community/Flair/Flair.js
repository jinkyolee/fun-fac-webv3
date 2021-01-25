import React from "react";
import Box from "components/atoms/Box/Box";
import Text from "components/atoms/Text/Text";
import "./Flair.css";
import { useRecoilValue } from "recoil";
import { languageState } from "recoil/atoms";

export const Flair = ({ type }) => {
  const language = useRecoilValue(languageState);
  let text;

  if (language === "kr") {
    if (type === "palace") {
      text = "고궁";
    } else {
      text = "게임";
    }
  } else {
    if (type === "palace") {
      text = "Palace";
    } else {
      text = "Game";
    }
  }

  return (
    <Box className={`flair ${type}`}>
      <Text className="flair-text">{text}</Text>
    </Box>
  );
};

export default Flair;
