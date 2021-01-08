import React from "react";
import Box from "components/atoms/Box/Box";
import Image from "components/atoms/Image/Image";
import { resultImage } from "assets/images/0_images";
import Text from "components/atoms/Text/Text";
import { LinkedButton } from "components/atoms/Button/Button";
import setResultContent from "functions/local/InterTest/setResultContent";

export const Result = ({ score }) => {
  const { body, title } = setResultContent(score);

  return (
    <Box
      className="vertical-flex centered"
      style={{ marginTop: "120px", marginBottom: "50px" }}
    >
      <Image src={resultImage} className="mediumW" alt="" />
      <Text className="sub-heading bold" style={{ marginTop: "20px" }}>
        {title}
      </Text>
      <Text className="sub-body" style={{ marginTop: "40px", width: "250px" }}>
        {body}
      </Text>
      <LinkedButton
        to="/"
        label="다른 궁도 더 알아보기"
        className="medium"
        style={{ marginTop: "50px" }}
      />
      <LinkedButton
        to="/all-types"
        label="전체 유형 보기"
        className="medium"
        style={{ marginTop: "20px" }}
      />
    </Box>
  );
};

export default Result;
