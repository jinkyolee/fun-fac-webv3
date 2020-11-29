import React from "react";
import "./Text.css";

export const Text = ({ className, children, style }) => {
  return (
    <span className={`text ${className}`} style={style}>
      {children}
    </span>
  );
};
