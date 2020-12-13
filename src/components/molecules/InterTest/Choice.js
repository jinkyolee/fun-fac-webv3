import React from "react";
import { Button } from "../../atoms/Button/Button";

export const Choice = ({
  label = "none",
  onClick = () => console.log("nothing"),
  style,
}) => {
  return (
    <Button
      className="big"
      label={label}
      onClick={() => {
        onClick();
      }}
      style={{ ...style, width: "200px", height: "60px" }}
    />
  );
};

export default Choice;
