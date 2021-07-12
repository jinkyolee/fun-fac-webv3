import React from "react";
import { Box } from "components/atoms/Box/Box";
import { ClickableImage, Image } from "components/atoms/Image/Image";
import copyLink from "functions/local/Community/copyLink";
import Text from "components/atoms/Text/Text";
import "./Pending.css";
import { pendingText } from "constants/textConsts/test";

export const Pending = ({ setTestState, language }) => {
  const { text, logo, illust, share, start } = pendingText(language);

  return (
    <Box
      className="vertical-flex align-center"
      style={{ width: "100%", position: "relative" }}
    >
      <Image src={logo} className="main-test-logo" />
      <Image src={illust} className="main-illust" />
      <Text className="main-subtext yangjin">{text}</Text>
      <ClickableImage
        src={start}
        className="start-button"
        onClick={() => setTestState("started")}
        alt="테스트 시작하기"
      />
      <ClickableImage
        src={share}
        className="circle share-btn"
        onClick={copyLink}
      />
    </Box>
  );
};

export default Pending;
