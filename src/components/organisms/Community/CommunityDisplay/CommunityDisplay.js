import React from "react";
import List from "components/atoms/List/List";
import CardedBlogItem from "components/molecules/Community/BlogItem/CardedBlogItem";
import ListedBlogItem from "components/molecules/Community/BlogItem/ListedBlogItem";
import "./CommunityDisplay.css";
import { useRecoilValue } from "recoil";
import { deviceType } from "recoil/atoms";

export const CommunityDisplay = ({ data, displayState }) => {
  const device = useRecoilValue(deviceType);
  let alignClass;

  if (displayState === "listed") {
    alignClass = "centered";
  } else {
    alignClass = "";
  }

  if (data.length < 1) {
    return (
      <span
        style={{
          marginTop: "300px",
          marginBottom: "340px",
          fontSize: "50px",
        }}
      >
        No Posts Found
      </span>
    );
  } else {
    return (
      <List
        className={
          device !== "small"
            ? `community-display ${alignClass}`
            : `community-display ${alignClass} mobile`
        }
        style={
          data.length > 6 ? { height: "fit-content" } : { height: "50rem" }
        }
      >
        {displayState === "grid"
          ? data.map(
              ({ title, user, flair, postDate, content, id, image }, index) => {
                return (
                  <CardedBlogItem
                    title={title}
                    user={user}
                    flair={flair}
                    postDate={postDate}
                    content={content}
                    id={id}
                    image={image}
                    key={index}
                  />
                );
              }
            )
          : data.map(({ title, user, flair, postDate, id }, index) => {
              return (
                <ListedBlogItem
                  title={title}
                  user={user}
                  flair={flair}
                  postDate={postDate}
                  id={id}
                  key={index}
                />
              );
            })}
      </List>
    );
  }
};

export default CommunityDisplay;
