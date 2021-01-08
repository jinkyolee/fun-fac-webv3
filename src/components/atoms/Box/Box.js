import React from "react";
import "./Box.css";

export const Box = ({ className = "", style, children }) => {
  return (
    <div className={`box ${className}`} style={style}>
      {children}
    </div>
  );
};

export const LinkedBox = ({ className = "", style, children, to }) => {
  return (
    <a href={to} className={`box ${className}`} style={style}>
      {children}
    </a>
  );
};

export default Box;
