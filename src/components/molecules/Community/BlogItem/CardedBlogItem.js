import React, { useEffect } from "react";
import filterContent from "../../../../functions/local/Community/filterContent";
import { LinkedBox, Box } from "../../../atoms/Box/Box";
import ListItem from "../../../atoms/List/ListItem";
import Text from "../../../atoms/Text/Text";
import Flair from "../Flair/Flair";
import "./BlogItem.css";

export const CardedBlogItem = ({ title, user, flair, date, content, id }) => {
  const filteredContent = filterContent(content);

  return (
    <ListItem className="card">
      <LinkedBox className="vertical-flex" to={`/${id}`}>
        <Box className="title-container">
          <Text className="item-title">{title}</Text>
          <Text className="item-uploader">{user}</Text>
        </Box>
        <Flair type={flair} />
        <Text className="content-preview">{filteredContent}</Text>
        <Text className="upload-date">{date}</Text>
      </LinkedBox>
    </ListItem>
  );
};

export default CardedBlogItem;
