import React from "react";
import { Box } from "components/atoms/Box/Box";
import { ClickableImage, Image } from "components/atoms/Image/Image";
import {
  testLogo,
  testIllust,
  testShare,
  testStart,
} from "assets/images/Test/0_testImgExp";
import copyLink from "functions/local/Community/copyLink";
import Text from "components/atoms/Text/Text";
import "./Pending.css";

export const Pending = ({ setTestState }) => {
  return (
    <Box
      className="vertical-flex align-center"
      style={{ width: "100%", position: "relative" }}
    >
      <Image src={testLogo} className="main-test-logo" />
      <Image src={testIllust} className="main-illust" />
      <Text className="main-subtext yangjin">
        각기 다른 매력과 분위기의 조선 5대궁 중<br />
        나와 찰떡인 궁은?
      </Text>
      <ClickableImage
        src={testStart}
        className="start-button"
        label="테스트 시작하기"
        onClick={() => setTestState("started")}
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
