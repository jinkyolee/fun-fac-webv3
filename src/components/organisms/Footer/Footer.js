import React from "react";
import "./Footer.css";

export const Footer = ({ rows }) => {
  return (
    <div className="footer">
      {rows.map((node, index) => {
        return (
          <div className="footer-column" key={index}>
            {node}
          </div>
        );
      })}
    </div>
  );
};

export default Footer;
