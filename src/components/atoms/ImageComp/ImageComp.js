import React from "react";
import "./ImageComp.css";

export const LinkedImage = ({ src, alt, className, to }) => {
  return (
    <img
      src={src}
      className={`image linked ${className}`}
      onClick={(e) => {
        e.preventDefault();
        window.location.href = to;
      }}
      alt={alt}
    />
  );
};

export const Image = ({ src, className, alt }) => {
  return <img src={src} className={`image ${className}`} alt={alt} />;
};
