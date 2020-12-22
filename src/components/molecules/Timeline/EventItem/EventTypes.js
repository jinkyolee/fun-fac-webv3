import React from "react";
import Box from "../../../atoms/Box/Box";
import Line from "../../../atoms/Line/Line";
import Text from "../../../atoms/Text/Text";

export const BasicEvent = ({ eventDate, date, eventName }) => {
  return (
    <Box className="event-container" style={{ left: eventDate }}>
      <Box className="event-item circle">
        <Text className="event-date">{date}</Text>
        <Text className="event-text" Type="pre">
          {eventName}
        </Text>
      </Box>
    </Box>
  );
};

export const TopEvent = ({ eventDate, date, eventName }) => {
  return (
    <Box className="event-container" style={{ left: eventDate }}>
      <Box className="event-item circle">
        <Text className="event-date top">{date}</Text>
        <Text className="event-text top">{eventName}</Text>
      </Box>
    </Box>
  );
};

export const VerticalEvent = ({ eventDate, date, eventName, styleProps }) => {
  const lineWidth = styleProps.width,
    lineHeight = styleProps.height;
  return (
    <Box className="event-container" style={{ left: eventDate }}>
      <Box className="event-item circle">
        <Box className="event-mask circle" />
        {lineHeight && (
          <Line
            className="event-line vertical"
            style={{
              width: styleProps.height,
              [styleProps.dir]: `calc(-${styleProps.height} / 2)`,
            }}
          />
        )}
        {lineWidth && (
          <Line
            className="event-line"
            style={{
              width: styleProps.width,
              left: "6px",
              [styleProps.dir]: `calc(-${styleProps.height})`,
            }}
          />
        )}
        <Box
          className="event-textbox vertical-flex align-center"
          style={{
            [styleProps.dir]: `calc(-${styleProps.height} - 20px)`,
            left: `calc(${styleProps.width} + 10px )`,
          }}
        >
          <Text className="event-date vertical">{date}</Text>
          <Text className="event-text vertical">{eventName}</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default BasicEvent;
