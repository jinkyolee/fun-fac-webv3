import React from "react";
import "./Line.css";

export const Line = ({ className = "", style, children }) => {
  return (
    <div className={`line ${className}`} style={style}>
      {children}
    </div>
  );
};

export default Line;
