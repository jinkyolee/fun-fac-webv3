import React from "react";
import { LinkedImage } from "../../../atoms/ImageComp/ImageComp";
import "./Chapter.css";

export const Chapter = ({ chapter, imgSrc }) => {
  return (
    <LinkedImage className="chapter" src={imgSrc} to={`./story/${chapter}`} />
  );
};

export default Chapter;
