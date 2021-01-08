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
}) => {
  // const filteredUser = filterUsername()
  const filteredContent = filterContent(content);
  console.log(content);

  return (
    <ListItem className="card">
      <LinkedBox className="vertical-flex" to={`/${id}`}>
        <Box className="title-container">
          <Text className="item-title">{title}</Text>
          <Text className="item-uploader">{user}</Text>
        </Box>
        <Flair type={flair} />
        <Box className="content-preview">{filteredContent}</Box>
        <Text className="upload-date">{postDate}</Text>
      </LinkedBox>
    </ListItem>
  );
};

export default CardedBlogItem;
