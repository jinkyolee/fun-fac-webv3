import React from "react";
import { Link } from "react-router-dom";
import "./Image.css";

export const LinkedImage = ({ src, className = "", to, style, alt = "" }) => {
  return (
    <Link to={to}>
      <img
        src={src}
        className={`image linked ${className}`}
        style={style}
        alt={alt} />
    </Link>
  );
};

export const Image = ({ src, className = "", style, alt = "" }) => {
  return (
    <img src={src} className={`image ${className}`} style={style} alt={alt} />
  );
};

export const ClickableImage = ({
  src,
  className = "",
  style,
  alt = "",
  onClick,
}) => {
  return (
    <img
      src={src}
      className={className}
      style={style}
      alt={alt}
      onClick={onClick}
    />
  );
};

export default Image;
