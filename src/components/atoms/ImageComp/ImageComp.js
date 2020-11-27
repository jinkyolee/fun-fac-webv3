import React from "react";
import "./ImageComp.css";

export const LinkedImage = ({ src, alt, className, to }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`image ${className}`}
      onClick={(e) => {
        e.preventDefault();
        window.location.href = to;
      }}
    />
  );
};
