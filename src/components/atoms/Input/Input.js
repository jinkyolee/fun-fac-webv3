import React from "react";
import Box from "components/atoms/Box/Box";
import "./Input.css";

export const EmailInput = ({ onChange, placeholder }) => {
  return (
    <Box className="input-container">
      <label className="auth-label" htmlFor="email">
        이메일
      </label>
      <input
        type="text"
        className="input auth-input"
        name="email"
        onChange={(e) => onChange(e)}
        placeholder={placeholder}
        required={true}
      />
    </Box>
  );
};

export const PasswordInput = ({ className = "", onChange, placeholder }) => {
  return (
    <Box className="input-container">
      <label className="auth-label" htmlFor="password">
        비밀번호
      </label>
      <input
        type="text"
        className="input auth-input"
        name="password"
        onChange={(e) => onChange(e)}
        placeholder={placeholder}
        required={true}
      />
    </Box>
  );
};
