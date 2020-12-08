import React from "react";
import Box from "../../atoms/Box/Box";
import Image from "../../atoms/ImageComp/ImageComp";
import { resultImage } from "../../../assets/images/0_images";
import Text from "../../atoms/Text/Text";
import { LinkButton } from "../../atoms/Button/Button";
import setResultContent from "../../../functions/local/setResultContent";

export const Result = ({ score }) => {
  const { body, title } = setResultContent(score);

  console.log(`${body}`);

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
      <LinkButton
        to="/"
        label="다른 궁도 더 알아보기"
        className="medium"
        style={{ marginTop: "50px" }}
      />
      <LinkButton
        to="/all-types"
        label="전체 유형 보기"
        className="medium"
        style={{ marginTop: "20px" }}
      />
    </Box>
  );
};

export default Result;
