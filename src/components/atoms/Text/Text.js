import React from "react";
import "./Text.css";

export const Text = ({ type, text }) => {
  return <span className={`text ${type}`}>{text}</span>;
};
