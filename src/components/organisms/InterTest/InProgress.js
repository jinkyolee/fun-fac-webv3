import React, { useRef, useState } from "react";
import { Box } from "components/atoms/Box/Box";
import { Text } from "components/atoms/Text/Text";
import Image from "components/atoms/Image/Image";
import Choice from "components/molecules/InterTest/Choice/Choice";
import { testBanner } from "assets/images/Test/0_testImgExp";
import ProgressBar from "components/molecules/InterTest/ProgressBar/ProgressBar";
import "./InProgress.css";
import { inProgressText } from "constants/textConsts/test";

export const InProgress = ({ setResult, language }) => {
  const [progress, setProgress] = useState(0);
  let points = useRef({
    duk: 0,
    hui: 0,
    bok: 0,
    soo: 0,
    gyeong: 0,
  });

  const increasePoints = (props) => {
    props.forEach((palace) => {
      points.current[palace] += 1;
    });

    setProgress(progress + 1);
  };

  const choices = inProgressText(language, setResult, increasePoints, points);

  return (
    <Box
      className="vertical-flex centered"
      style={{ marginTop: "170px", marginBottom: "150px", width: "100%" }}
    >
      <Box className="banner align-center justify-center">
        <Image src={testBanner} className="banner__image" />
      </Box>
      <ProgressBar total={Object.keys(choices).length} current={progress} />
      <Text
        className="sub-heading bold"
        style={{ marginTop: "60px", color: "#00249c" }}
      >
        {choices[progress][0].question}
      </Text>
      <Box className="vertical-flex">
        <Choice
          label={choices[progress][1].choiceText}
          onClick={() => choices[progress][1].increaseFunc()}
        />
        <Choice
          label={choices[progress][2].choiceText}
          onClick={() => choices[progress][2].increaseFunc()}
        />
      </Box>
    </Box>
  );
};

export default InProgress;
