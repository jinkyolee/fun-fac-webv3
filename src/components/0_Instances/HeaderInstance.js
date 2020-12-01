import React from "react";
import Header from "../organisms/Header/Header";
import { logoImage } from "../../images/0_images";
import { LinkedImage } from "../atoms/ImageComp/ImageComp";
import { Button, LinkButton } from "../atoms/Button/Button";

export const HeaderInstance = () => {
  return (
    <Header
      firstCol={<LinkedImage src={logoImage} className="logo" to="/" />}
      secondCol={[
        <LinkButton to="/game" title="Game" key="1" />,
        <LinkButton to="/story" title="Story" key="2" />,
        <LinkButton to="/team" title="Team" key="3" />,
        <LinkButton to="/test" title="Test" key="4" />,
      ]}
      thirdCol={
        <Button
          onClick={(e) => {
            e.preventDefault();
            console.log("Button clicked");
          }}
          label="English"
          className="lang-btn"
        />
      }
    />
  );
};

export default Header;
