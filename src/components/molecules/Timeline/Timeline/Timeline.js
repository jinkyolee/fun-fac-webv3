import React from "react";
import Line from "components/atoms/Line/Line";
import Event from "../EventItem/Event";
import "./Timeline.css";

const Timeline = ({ events }) => {
  return (
    <Line className="large timeline">
      {events.map((event, index) => {
        return (
          <Event
            currentEvent={event}
            prevEvent={events[index - 1]}
            key={index}
          />
        );
      })}
    </Line>
  );
};

export default Timeline;
