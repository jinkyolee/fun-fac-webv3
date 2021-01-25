import React from "react";
import Box from "components/atoms/Box/Box";
import Image, {
  ClickableImage,
  LinkedImage,
} from "components/atoms/Image/Image";
import {
  resultImage,
  testOther,
  testShare,
} from "assets/images/Test/0_testImgExp";
import Text from "components/atoms/Text/Text";
import setResultContent from "functions/local/InterTest/setResultContent";
import "./Result.css";
import copyLink from "functions/local/Community/copyLink";

export const Result = ({ score, language }) => {
  const { title, subtext } = setResultContent(score, language);

  return (
    <Box className="vertical-flex align-center">
      <ClickableImage
        src={testShare}
        className="circle share-btn"
        onClick={copyLink}
      />
      <Box
        className="vertical-flex result-container"
        style={{ marginTop: "170px" }}
      >
        <Box className="justify-center align-center result-title">
          <Text className="body bold">{title}</Text>
        </Box>
        <Box className="vertical-flex">
          {subtext.map((content, index) => {
            return (
              <Text className="result-subtext sub-body" key={index}>
                {content}
              </Text>
            );
          })}
        </Box>
        <Image src={resultImage} className="carousel" alt="" />
        <Box className="vertical-flex" style={{ width: "425px" }}>
          <Text className="carousel-title bold super-body">광화문</Text>
          <Text className="carousel-description">
            광화문은 조선의 법궁인 경복궁의 정문으로 다른 궁궐들의 정문과는 달리
            돌로 높게 쌓고 그 위에 중층구조의 누각을 세워서 마치 성곽의 성문과
            같은 격식으로 장대하게 진 것이 포인트!
          </Text>
        </Box>
      </Box>
      <LinkedImage
        src={testOther}
        to="/"
        label="다른 궁도 더 알아보기"
        className="medium"
        style={{
          width: "200px",
          height: "60px",
          marginTop: "30px",
          marginBottom: "50px",
          objectFit: "contain",
        }}
      />
    </Box>
  );
};

export default Result;
