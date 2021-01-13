import React, { useEffect, useState } from "react";
import { HeaderInstance as Header } from "components/0_Instances/HeaderInstance";
import PalaceTimeline from "components/molecules/Timeline/PalaceTimeline/PalaceTimeline";
import StandardPage from "components/templates/StandardPage";
import Box from "components/atoms/Box/Box";
import palaceEvents from "constants/events";
import Text from "components/atoms/Text/Text";

export const Timelines = () => {
  const [text, setText] = useState(["경복궁", "626"]);

  const setPalaceText = () => {
    if (text[0] === "경복궁") {
      setText(["창덕궁", "616"]);
    } else if (text[0] === "창덕궁") {
      setText(["창경궁", "538"]);
    } else if (text[0] === "창경궁") {
      setText(["경희궁", "389"]);
    } else if (text[0] === "경희궁") {
      setText(["덕수궁", "428"]);
    } else if (text[0] === "덕수궁") {
      setText(["경복궁", "626"]);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      const targetText = document.querySelectorAll(".palace-text");
      targetText.forEach((element) => element.classList.remove("fade-in"));
      setTimeout(() => {
        targetText.forEach((element) => element.classList.remove("fade-out"));
        setPalaceText();
        targetText.forEach((element) => element.classList.add("fade-in"));
      }, 990);
      targetText.forEach((element) => element.classList.add("fade-out"));
    }, 4000);
  }, [text]);

  return (
    <StandardPage
      className="justify-center"
      header={<Header />}
      body={
        <Box
          className="vertical-flex justify-center"
          style={{ marginTop: "135px", marginBottom: "190px" }}
        >
          <Text
            className="heading centered"
            style={{ marginBottom: "60px", color: "#00249c" }}
          >
            우리가{" "}
            <Text className="super-bold palace-text fade-in">{text[0]}</Text>과
            함께한 시간{" "}
            <Text className="super-bold palace-text fade-in">{text[1]}년</Text>
          </Text>
          {palaceEvents.map(({ image, events, label }, index) => {
            return (
              <PalaceTimeline
                img={image}
                events={events}
                key={index}
                label={label}
              />
            );
          })}
        </Box>
      }
    />
  );
};

export default Timelines;
