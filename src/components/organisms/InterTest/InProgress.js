import React, { useState } from "react";
import { Box } from "../../atoms/Box/Box";
import { Text } from "../../atoms/Text/Text";
import Image from "../../atoms/ImageComp/ImageComp";
import Choice from "./Choice";
import { testLogo } from "../../../images/0_images";

// TODO: Find a way so that when progress is finished the rendered component changes from InProgress to Result

export const InProgress = ({ setTestState, setScore }) => {
  const [progress, setProgress] = useState(0);
  const [points, setPoints] = useState({
    duk: 0,
    hui: 0,
    bok: 0,
    soo: 0,
    gyeong: 0,
  });

  const increasePoints = (props) => {
    setPoints({
      ...points,
      ...props.reduce((editedObj, prop) => {
        editedObj[prop] = points[prop] + 1;
        return editedObj;
      }, {}),
    });
    setProgress(progress + 1);
    checkProgress();
  };

  const checkProgress = () => {
    console.log(points);
    console.log(progress);
    if (progress >= 1) {
      setScore(points);
      setTestState("finished");
    }
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
          increasePoints(["gyeong", "duk"]);
        },
      },
      {
        choiceText: "Choice 4",
        increaseFunc: () => {
          increasePoints(["bok", "gyeong"]);
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
