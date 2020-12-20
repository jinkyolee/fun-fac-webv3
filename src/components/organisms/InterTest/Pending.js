import React from "react";
import { Box } from "../../atoms/Box/Box";
import { Button } from "../../atoms/Button/Button";
import { Image } from "../../atoms/Image/Image";
import { testLogo, testIllust } from "../../../assets/images/0_images";

export const Pending = ({ setTestState }) => {
  return (
    <Box className="vertical-flex align-center" style={{ marginTop: "90px" }}>
      <Image src={testLogo} className="largeW" />
      <Image
        src={testIllust}
        className=""
        style={{ width: "800px", marginTop: "20px" }}
      />
      <Button
        className="big"
        label="테스트 시작하기"
        style={{ marginTop: "20px" }}
        onClick={() => {
          setTestState("started");
        }}
      />
    </Box>
  );
};

export default Pending;
