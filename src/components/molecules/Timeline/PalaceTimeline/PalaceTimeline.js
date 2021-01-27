import React from "react";
import Box from "components/atoms/Box/Box";
import Image from "components/atoms/Image/Image";
import Timeline from "../Timeline/Timeline";
import "./PalaceTimeline.css";

export const PalaceTimeline = ({ img, events, label }) => {
  return (
    <Box className="horizontal-flex align-center palace-timeline">
      <Box
        className="vertical-flex align-center"
        style={{ marginRight: "40px", maxWidth: "160px" }}
      >
        <Box className="funfac-styled palace-label">{label}</Box>
        <Image className="timeline-img" src={img} />
      </Box>
      <Timeline events={events} />
    </Box>
  );
};

export default PalaceTimeline;
