import React from "react";
import Box from "../../../atoms/Box/Box";
import Line from "../../../atoms/Line/Line";
import ListItem from "../../../atoms/List/ListItem";
import Text, { LinkedText } from "../../../atoms/Text/Text";
import Flair from "../Flair/Flair";

export const ListedBlogItem = ({ title, user, flair, date, id }) => {
  return (
    <ListItem className="listItem horizontal-flex">
      <Box className="horizontal-flex column">
        <Flair type={flair} />
        <LinkedText className="item-title" to={`/${id}`}>
          {title}
        </LinkedText>
      </Box>
      <Box className="horizontal-flex align-center column">
        <Text className="item-uploader">{user}</Text>
        <Line className="vertical divider" />
        <Text className="upload-date">{date}</Text>
      </Box>
    </ListItem>
  );
};

export default ListedBlogItem;
