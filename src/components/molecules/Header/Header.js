import React from "react";
import Box from "components/atoms/Box/Box";
import "./Header.css";

// Organism for header that has three sections
export const Header = ({ firstCol, secondCol, thirdCol }) => {
  return (
    <header className="header closed">
      <Box className="row" key={"first-col"}>{firstCol}</Box>
      <Box className="row" key={"second-col"}>{secondCol}</Box>
      <Box className="row" key={"third-col"}>{thirdCol}</Box>
    </header>
  );
};

export const HeaderMobile = ({ firstCol, dropdown }) => {
  return (
    <header className="header-mobile closed">
      <Box className="row-mobile">{firstCol}</Box>
      <Box className="row-mobile">{dropdown}</Box>
    </header>
  );
};

export default Header;
