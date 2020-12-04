import React from "react";
import "./Button.css";

export const Button = ({
  type = "button",
  onClick,
  label = "Button",
  className,
  style,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn ${className}`}
      style={style}
    >
      {label}
    </button>
  );
};

export const LinkButton = ({ to, label, className = "", style }) => {
  return (
    <a href={to} className={`btn link-btn ${className}`} style={style}>
      {label}
    </a>
  );
};

export default Button;
