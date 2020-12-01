import React from "react";
import "./Header.css";

// Organism for header that has three sections
export const Header = ({ firstCol, secondCol, thirdCol }) => {
  return (
    <nav className="header">
      <div className="column">{firstCol}</div>
      <div className="column">{secondCol}</div>
      <div className="column">{thirdCol}</div>
    </nav>
  );
};

export default Header;
