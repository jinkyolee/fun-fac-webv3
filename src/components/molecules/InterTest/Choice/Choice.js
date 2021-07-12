import React from "react";
import "./Choice.css";
import { ClickableBox } from "components/atoms/Box/Box";
import Text from "components/atoms/Text/Text";

export const Choice = ({
  label = "none",
  onClick = () => console.log("nothing"),
}) => {
  return (
    <ClickableBox
      className="choice align-center justify-center vertical-flex"
      onClick={() => {
        onClick();
      }}
    >
      <Text style={{ width: "230px", textAlign: "center", userSelect: "none", fontWeight: '500', fontSize: '20px', lineHeight:'28.96px' }}>
        {label[0]}
      </Text>
      {label[1] && (
        <Text
          style={{ width: "230px", textAlign: "center", userSelect: "none" }}
        >
          {label[1]}
        </Text>
      )}
    </ClickableBox>
  );
};

export default Choice;
