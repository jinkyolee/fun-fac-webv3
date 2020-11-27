import React from "react";
import { Header3 as Header } from "../organisms/Header/Header";
import { logoImage } from "../../images/0_images";
import { LinkedImage } from "../atoms/ImageComp/ImageComp";
import { Button, LinkButton } from "../atoms/Button/Button";

export const HeaderInstance = () => {
  return (
    <Header
      firstCol={<LinkedImage src={logoImage} alt="" className="logo" to="/" />}
      secondCol={[
        <LinkButton to="/game" title="Tab 1" key="1" />,
        <LinkButton to="/othershit" title="Tab 2" key="2" />,
        <LinkButton to="/thirdshit" title="Tab 3" key="3" />,
      ]}
      thirdCol={
        <Button
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/btnshit";
          }}
          label="English"
          className="lang-btn"
        />
      }
    />
  );
};
