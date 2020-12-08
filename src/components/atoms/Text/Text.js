import React from "react";
import "./Text.css";

export const Text = ({ className, children, style, Type = "span" }) => {
  return (
    <Type className={`text ${className}`} style={style}>
      {children}
    </Type>
  );
};

export default Text;
