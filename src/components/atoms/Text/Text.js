import React from "react";
import "./Text.css";

export const Text = ({ className, children, style }) => {
  console.log(style);
  return (
    <span className={`text ${className}`} style={style}>
      {children}
    </span>
  );
};
