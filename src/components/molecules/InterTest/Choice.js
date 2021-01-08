import React from "react";
import { Button } from "components/atoms/Button/Button";

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
      style={style}
    />
  );
};

export default Choice;
