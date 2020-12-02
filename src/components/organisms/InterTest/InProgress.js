import React, { useEffect, useRef, useState } from "react";
import { Box } from "../../atoms/Box/Box";
import { Text } from "../../atoms/Text/Text";
import Image from "../../atoms/ImageComp/ImageComp";
import Choice from "./Choice";
import { testLogo } from "../../../images/0_images";

// TODO: Find a way so that when progress is finished the rendered component changes from InProgress to Result
// !!!!! FINISHED !!!!!

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
      {
        choiceText: "Choice 3",
        increaseFunc: () => {
          console.log(points);
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
      <Text>Progress Bar</Text>
      <Text className="sub-heading bold" style={{ marginTop: "75px" }}>
        질문 텍스트
      </Text>
      <Choice
        style={{ marginTop: "90px" }}
        label={choiceProps[progress][0].choiceText}
        onClick={() => choiceProps[progress][0].increaseFunc()}
      />
      <Choice
        style={{ marginTop: "40px" }}
        label={choiceProps[progress][1].choiceText}
        onClick={() => choiceProps[progress][1].increaseFunc()}
      />
      <Image src={testLogo} className="mediumW" style={{ marginTop: "60px" }} />
    </Box>
  );
};

export default InProgress;
