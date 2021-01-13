import React from "react";
import Box from "components/atoms/Box/Box";
import "./Header.css";

// Organism for header that has three sections
export const Header = ({ firstCol, secondCol, thirdCol }) => {
  return (
    <nav className="header closed">
      <Box className="row">{firstCol}</Box>
      <Box className="row">{secondCol}</Box>
      <Box className="row">{thirdCol}</Box>
    </nav>
  );
};

export default Header;
