import React from "react";
import filterContent from "functions/local/Community/filterContent";
import { LinkedBox, Box } from "components/atoms/Box/Box";
import ListItem from "components/atoms/List/ListItem";
import Text from "components/atoms/Text/Text";
import Flair from "components/molecules/Community/Flair/Flair";
import "./BlogItem.css";
import filterUsername from "functions/local/Community/filterUsername";

export const CardedBlogItem = ({
  title,
  user,
  flair,
  postDate,
  content,
  id,
  image,
}) => {
  const filteredUser = filterUsername(user);
  const filteredContent = filterContent(content);

  return (
    <ListItem>
      <LinkedBox
        className="vertical-flex card"
        to={`/community/post?id=${id}`}
        style={{ position: "relative" }}
      >
        <Flair type={flair} />
        <Box className="content-container">
          <Text className="item-title">
            {
              // set icon for posts with image
            }
            {title}
          </Text>
          <Box className="content-preview">
            {filteredContent.map((content, index) => {
              return (
                <Text className="preview-text" key={index}>
                  {content}
                </Text>
              );
            })}
          </Box>
        </Box>
        <Box className="bottom-container">
          <Text className="upload-date">{postDate}</Text>
          <Text className="item-uploader">{filteredUser}</Text>
        </Box>
      </LinkedBox>
    </ListItem>
  );
};

export default CardedBlogItem;
