import React from "react";
import { Box } from "components/atoms/Box/Box";
import { ClickableImage, Image } from "components/atoms/Image/Image";
import copyLink from "functions/local/Community/copyLink";
import {Text} from "components/atoms/Text/Text";
import "./Pending.css";
import { pendingText } from "constants/textConsts/test";
import Button from "components/atoms/Button/Button";

export const Pending = ({ setTestState, language }) => {
  const { text, logo, illust, share, start } = pendingText(language);

  return (
    <Box
      className="vertical-flex align-center"
      style={{ width: "100%", position: "relative" }}
    >
      <Text children={logo} className="main-test-logo yangjin" />
      <Image src={illust} className="main-illust" />
      <Text className="main-subtext yangjin">{text}</Text>
      <Button
        label={start}
        className="start-button"
        onClick={() => setTestState("started")}
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
