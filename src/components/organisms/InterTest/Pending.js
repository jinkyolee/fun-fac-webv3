import React from "react";
import { Box } from "components/atoms/Box/Box";
import { ClickableImage, Image } from "components/atoms/Image/Image";
import {
  testLogo,
  testIllust,
  testShare,
  testStart,
} from "assets/images/0_images";
import "./Pending.css";
import copyLink from "functions/local/Community/copyLink";

export const Pending = ({ setTestState }) => {
  return (
    <Box
      className="vertical-flex align-center"
      style={{ width: "100%", position: "relative", top: "-4rem" }}
    >
      <Image src={testLogo} className="main-test-logo" />
      <Image src={testIllust} className="main-illust" />
      <ClickableImage
        src={testStart}
        className="start-button"
        label="테스트 시작하기"
        onClick={() => {
          setTestState("started");
        }}
      />
      <ClickableImage
        src={testShare}
        className="circle share-btn"
        onClick={copyLink}
      />
    </Box>
  );
};

export default Pending;
