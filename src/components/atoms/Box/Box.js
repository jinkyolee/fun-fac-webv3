import React from "react";
import "./Box.css";

export const Box = ({ className = "", style, children }) => {
  return (
    <div className={`box ${className}`} style={style}>
      {children}
    </div>
  );
};

export default Box;
