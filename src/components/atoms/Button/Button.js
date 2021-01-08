import React from "react";
import "./Button.css";

export const Button = ({ onClick, label = "", className, style }) => {
  return (
    <button onClick={onClick} className={`btn ${className}`} style={style}>
      {label}
    </button>
  );
};

export const LinkedButton = ({ to, label, className = "", style, onClick }) => {
  return (
    <a
      href={to}
      className={`btn link-btn ${className}`}
      style={style}
      onClick={onClick}
    >
      {label}
    </a>
  );
};

export default Button;
