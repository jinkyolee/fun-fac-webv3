import React from "react";
import Box from "components/atoms/Box/Box";
import Line from "components/atoms/Line/Line";
import ListItem from "components/atoms/List/ListItem";
import Text, { LinkedText } from "components/atoms/Text/Text";
import Flair from "../Flair/Flair";
import "./BlogItem.css";

export const ListedBlogItem = ({ title, user, flair, postDate, id }) => {
  return (
    <ListItem className="listItem horizontal-flex">
      <Box className="horizontal-flex column">
        <Flair type={flair} />
        <LinkedText className="item-title" to={`/community/post?id=${id}`}>
          {title}
        </LinkedText>
      </Box>
      <Box className="horizontal-flex align-center column">
        <Text className="item-uploader">{user}</Text>
        <Line className="vertical divider" />
        <Text className="upload-date">{postDate}</Text>
      </Box>
    </ListItem>
  );
};

export default ListedBlogItem;
