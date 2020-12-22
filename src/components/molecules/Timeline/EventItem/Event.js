import React from "react";
import { BasicEvent, TopEvent, VerticalEvent } from "./EventTypes";
import "./Event.css";

export const Event = ({ currentEvent, prevEvent = { date: 1395 } }) => {
  const { date, eventName, style } = currentEvent;
  const { type, props = {} } = style;
  const prevDate = prevEvent.date;
  let eventDate = (date - 1395) * 1.5;
  let eventTemp;

  if (date - prevDate < 5 && date !== 1395) {
    eventDate = (prevDate - 1385) * 1.55 + 5;
  } else if (date - prevDate < 10 && date !== 1395) {
    eventDate = (prevDate - 1385) * 1.55;
  } else {
    eventDate = (date - 1395) * 1.55;
  }

  if (type === "Vertical") {
    eventTemp = (
      <VerticalEvent
        eventDate={eventDate}
        date={date}
        eventName={eventName}
        styleProps={props}
      />
    );
  } else if (type === "Basic") {
    eventTemp = (
      <BasicEvent eventDate={eventDate} date={date} eventName={eventName} />
    );
  } else {
    eventTemp = (
      <TopEvent eventDate={eventDate} date={date} eventName={eventName} />
    );
  }

  return eventTemp;
};

export default Event;
