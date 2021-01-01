import React from "react";

export const InputButton = ({ onClick, label = "", className = "", style }) => {
  return (
    <input
      type="button"
      value={label}
      onClick={onClick}
      className={`btn-input ${className}`}
      style={style}
    />
  );
};

export const TextInput = ({
  onChange,
  required,
  className = "",
  label,
  style,
  name,
}) => {
  return (
    <input
      type="text"
      value={label}
      className={`input ${className}`}
      name={name}
      onChange={onChange}
      required={required}
      style={style}
    />
  );
};
