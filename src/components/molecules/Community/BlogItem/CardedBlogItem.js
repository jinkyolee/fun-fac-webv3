import React from "react";
import filterContent from "../../../../functions/local/filterContent";
import { LinkedBox, Box } from "../../../atoms/Box/Box";
import Text from "../../../atoms/Text/Text";
import Flair from "../Flair/Flair";
import "./BlogItem.css";

export const CardedBlogItem = ({ title, user, flair, date, content }) => {
  const filteredContent = filterContent(content);

  return (
    <LinkedBox
      className="card vertical-flex"
      to="/"
      style={{ marginTop: "100px" }}
    >
      <Box className="title-container">
        <Text className="item-title">{title}</Text>
        <Text className="item-user">{user}</Text>
      </Box>
      <Flair type={flair} />
      <Text className="content-preview">{filteredContent}</Text>
      <Text className="upload-date">{date}</Text>
    </LinkedBox>
  );
};

export default CardedBlogItem;
