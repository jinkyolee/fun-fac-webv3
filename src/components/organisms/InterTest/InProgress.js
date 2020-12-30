import React, { useRef, useState } from "react";
import { Box } from "components/atoms/Box/Box";
import { Text } from "components/atoms/Text/Text";
import Image from "components/atoms/Image/Image";
import Choice from "components/molecules/InterTest/Choice";
import { testLogo } from "assets/images/0_images";
import ProgressBar from "components/molecules/InterTest/ProgressBar/ProgressBar";

export const InProgress = ({ setResult }) => {
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

  const choiceProps = {
    0: [
      { question: "질문 1" },
      {
        choiceText: "Choice 1",
        increaseFunc: () => {
          increasePoints(["duk", "soo"]);
        },
      },
      {
        choiceText: "Choice 2",
        increaseFunc: () => {
          increasePoints(["bok", "hui"]);
        },
      },
    ],
    1: [
      { question: "질문 2" },
      {
        choiceText: "Choice 3",
        increaseFunc: () => {
          increasePoints(["gyeong", "duk"]);
          setResult(points.current);
        },
      },
      {
        choiceText: "Choice 4",
        increaseFunc: () => {
          increasePoints(["bok", "gyeong"]);
          setResult(points.current);
        },
      },
    ],
  };

  return (
    <Box className="vertical-flex centered this" style={{ marginTop: "100px" }}>
      <ProgressBar total={2} current={progress} />
      <Text className="sub-heading bold" style={{ marginTop: "75px" }}>
        {choiceProps[progress][0].question}
      </Text>
      <Choice
        style={{ marginTop: "90px" }}
        label={choiceProps[progress][1].choiceText}
        onClick={() => choiceProps[progress][1].increaseFunc()}
      />
      <Choice
        style={{ marginTop: "40px" }}
        label={choiceProps[progress][2].choiceText}
        onClick={() => choiceProps[progress][2].increaseFunc()}
      />
      <Image src={testLogo} className="mediumW" style={{ marginTop: "60px" }} />
    </Box>
  );
};

export default InProgress;
