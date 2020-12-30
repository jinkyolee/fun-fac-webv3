import React from "react";
import List from "components/atoms/List/List";
import CardedBlogItem from "components/molecules/Community/BlogItem/CardedBlogItem";
import ListedBlogItem from "components/molecules/Community/BlogItem/ListedBlogItem";
import "./CommunityDisplay.css";
import Box from "components/atoms/Box/Box";

export const CommunityDisplay = ({ data, displayState }) => {
  let alignClass;

  if (displayState === "listed") {
    alignClass = "centered";
  } else {
    alignClass = "";
  }

  return (
    <List className={`community-display ${alignClass}`}>
      {displayState === "grid"
        ? data.map(({ title, user, flair, date, content, id }, index) => {
            return (
              <CardedBlogItem
                title={title}
                user={user}
                flair={flair}
                date={date}
                content={content}
                id={id}
                key={index}
              />
            );
          })
        : data.map(({ title, user, flair, date, id }, index) => {
            return (
              <ListedBlogItem
                title={title}
                user={user}
                flair={flair}
                date={date}
                id={id}
                key={index}
              />
            );
          })}
    </List>
  );
};

export default CommunityDisplay;
