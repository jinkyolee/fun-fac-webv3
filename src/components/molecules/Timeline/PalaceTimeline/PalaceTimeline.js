import React from "react";
import Box from "../../../atoms/Box/Box";
import Image from "../../../atoms/Image/Image";
import Timeline from "../Timeline/Timeline";
import "./PalaceTimeline.css";

export const PalaceTimeline = ({ img, events }) => {
  return (
    <Box className="horizontal-flex align-center palace-timeline">
      <Image className="timeline-img" src={img} />
      <Timeline events={events} />
    </Box>
  );
};

export default PalaceTimeline;