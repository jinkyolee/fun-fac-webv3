import React from "react";
import "./Button.css";

export const Button = ({ type = "button", onClick, label, className }) => {
  return (
    <button type={type} onClick={onClick} className={className}>
      {label}
    </button>
  );
};

export const LinkButton = ({ to, title }) => {
  return (
    <a href={to} className="link-btn">
      {title}
    </a>
  );
};
