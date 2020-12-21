import React from "react";
import { HeaderInstance as Header } from "../components/0_Instances/HeaderInstance";
import PalaceTimeline from "../components/molecules/Timeline/PalaceTimeline/PalaceTimeline";
import StandardPage from "../components/templates/StandardPage";
import Box from "../components/atoms/Box/Box";
import palaceEvents from "../constants/events";
import Text from "../components/atoms/Text/Text";

export const Timelines = () => {
  return (
    <StandardPage
      className="justify-center"
      header={<Header />}
      body={
        <Box
          className="vertical-flex justify-center"
          style={{ marginTop: "135px", marginBottom: "190px" }}
        >
          <Text className="heading centered" style={{ marginBottom: "60px" }}>
            우리가 <Text className="super-bold">경복궁</Text>과 함께한 시간{" "}
            <Text className="super-bold">625년</Text>
          </Text>
          {palaceEvents.map(({ image, events }, index) => {
            return <PalaceTimeline img={image} events={events} key={index} />;
          })}
        </Box>
      }
    />
  );
};

export default Timelines;
