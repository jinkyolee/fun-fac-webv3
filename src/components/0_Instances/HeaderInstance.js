import React from "react";
import Header from "../organisms/Header/Header";
import { logoImage } from "../../assets/images/0_images";
import { LinkedImage } from "../atoms/Image/Image";
import { Button, LinkButton } from "../atoms/Button/Button";

export const HeaderInstance = () => {
  return (
    <Header
      firstCol={<LinkedImage src={logoImage} className="logo" to="/" />}
      secondCol={[
        <LinkButton to="/game" label="Game" key="1" className="tab" />,
        <LinkButton to="/story" label="Story" key="2" className="tab" />,
        <LinkButton to="/team" label="Team" key="3" className="tab" />,
        <LinkButton to="/test" label="Test" key="4" className="tab" />,
        <LinkButton to="/timeline" label="Timeline" key="5" className="tab" />,
        <LinkButton
          to="/persons/sejong"
          label="Sejong"
          key="6"
          className="tab"
        />,
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
