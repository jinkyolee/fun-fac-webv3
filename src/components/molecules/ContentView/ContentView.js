import React from "react";
import { LinkedImage } from "../../atoms/ImageComp/ImageComp";
import { Text } from "../../atoms/Text/Text";
import "./ContentView.css";

export const ContentView = ({ imgSrc, to, title, description }) => {
  return (
    <div className="content-container">
      <LinkedImage src={imgSrc} alt="" className="content-image" to={to} />
      <div className="description-container">
        <Text type="heading" text={title} />
        <br />
        <Text type="sub-heading" text={description} />
      </div>
    </div>
  );
};
