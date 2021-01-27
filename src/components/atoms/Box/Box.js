import React from "react";
import "./Box.css";

export const Box = ({ className = "", style, children, onBlur }) => {
  return (
    <div className={`box ${className}`} style={style} onBlur={onBlur}>
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

export const ClickableBox = ({ className = "", style, children, onClick }) => {
  return (
    <div
      className={`box clickable ${className}`}
      style={style}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Box;
