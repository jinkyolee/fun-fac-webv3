import React from "react";
import "./ImageComp.css";

export const LinkedImage = ({ src, className = "", to, style, alt = "" }) => {
  return (
    <img
      src={src}
      className={`image linked ${className}`}
      onClick={(e) => {
        e.preventDefault();
        window.location.href = to;
      }}
      style={style}
      alt={alt}
    />
  );
};

export const Image = ({ src, className = "", style, alt = "" }) => {
  return (
    <img src={src} className={`image ${className}`} style={style} alt={alt} />
  );
};

export default Image;
