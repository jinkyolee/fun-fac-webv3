import React from "react";

export const TimelineTitle = ({ firstText, secText }) => {
  return (
    <Text className="heading centered" style={{ color: "#00249c" }}>
      우리가 <Text className="super-bold palace-text fade-in">{firstText}</Text>
      과 함께한 시간{" "}
      <Text className="super-bold palace-text fade-in">{secText}년</Text>
    </Text>
  );
};

export default TimelineTitle;
