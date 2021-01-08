import React from "react";
import "./Input.css";

export const CustomInput = ({
  type,
  style,
  className = "",
  accept,
  onChange,
}) => {
  return (
    <input
      type={type}
      className={`input ${className}`}
      style={style}
      accept={accept}
      onChange={onChange}
    />
  );
};

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
  type = "text",
  onChange,
  required = false,
  className = "",
  value,
  style,
  name,
  placeholder = "",
}) => {
  return (
    <input
      contentEditable={true}
      type={type}
      value={value}
      className={`input ${className}`}
      name={name}
      onChange={onChange}
      required={required}
      style={style}
      placeholder={placeholder}
    />
  );
};

export const Textarea = ({
  className,
  value,
  name,
  onInput,
  required,
  style,
}) => {
  return (
    <div
      className={`textarea ${className}`}
      name={name}
      onInput={onInput}
      required={required}
      contentEditable={true}
      style={style}
    >
      {value}
    </div>
  );
};

export const Dropdown = ({
  className,
  options,
  name,
  required,
  style,
  defaultLabel,
  onChange,
  value,
}) => {
  return (
    <select
      className={className}
      name={name}
      required={required}
      style={style}
      onChange={onChange}
      value={value}
    >
      <option defaultValue value="">
        {defaultLabel}
      </option>
      {options.map(({ value, label }, index) => {
        return (
          <option value={value} key={index}>
            {label}
          </option>
        );
      })}
    </select>
  );
};
