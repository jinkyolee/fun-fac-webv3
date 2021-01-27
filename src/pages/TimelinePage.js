import React, { useEffect, useState } from "react";
import { HeaderInstance as Header } from "components/0_Instances/HeaderInstance";
import PalaceTimeline from "components/molecules/Timeline/PalaceTimeline/PalaceTimeline";
import StandardPage from "components/templates/StandardPage";
import Box from "components/atoms/Box/Box";
import Text from "components/atoms/Text/Text";
import palaceText from "constants/events";
import { useRecoilValue } from "recoil";
import { languageState } from "recoil/atoms";

export const Timelines = () => {
  const language = useRecoilValue(languageState);
  const { palaceEvents, rotationText } = palaceText(language);
  const [text, setText] = useState(rotationText[0]);
  console.log(text.current);

  const setPalaceText = () => {
    if (text.current === "gyeongbok") {
      setText(rotationText[1]);
    } else if (text.current === "changdeok") {
      setText(rotationText[2]);
    } else if (text.current === "changgyeong") {
      setText(rotationText[3]);
    } else if (text.current === "gyeonghui") {
      setText(rotationText[4]);
    } else if (text.current === "deoksoo") {
      setText(rotationText[0]);
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
      }, 985);
      targetText.forEach((element) => element.classList.add("fade-out"));
    }, 4000);
    // eslint-disable-next-line
  }, [text]);

  return (
    <StandardPage
      className="justify-center"
      header={<Header />}
      body={
        <Box
          className="vertical-flex justify-center"
          style={{ marginTop: "170px", marginBottom: "150px" }}
        >
          <Text className="heading centered" style={{ color: "#00249c" }}>
            우리가{" "}
            <Text className="super-bold palace-text fade-in">
              {text.text[0]}
            </Text>
            과 함께한 시간{" "}
            <Text className="super-bold palace-text fade-in">
              {text.text[1]}년
            </Text>
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
