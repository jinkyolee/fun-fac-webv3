import React from "react";
import "./Button.css";
import { Link } from 'react-router-dom'

export const Button = ({ onClick, label = "", className, style }) => {
  return (
    <button onClick={onClick} className={`btn ${className}`} style={style}>
      {label}
    </button>
  );
};

export const LinkedButton = ({ to, label, className = "", style, onClick }) => {
  return (
    <Link
      to={to}
      className={`${className} btn link-btn`}
      style={style}
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

export default Button;
