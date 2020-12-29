import React from "react";
import "./Text.css";

export const Text = ({ className = "", children, style, Type = "span" }) => {
  return (
    <Type className={`text ${className}`} style={style}>
      {children}
    </Type>
  );
};

export const LinkedText = ({ className = "", children, style, to }) => {
  return (
    <a className={`link ${className}`} style={style} href={to}>
      {children}
    </a>
  );
};

export default Text;
