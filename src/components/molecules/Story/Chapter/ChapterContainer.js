import React from "react";
import Box from "../../../atoms/Box/Box";
import "./Chapter.css";

export const ChapterContainer = ({ chapters }) => {
  return <Box className="horizontal-flex chapter-container">{chapters}</Box>;
};

export default ChapterContainer;