import React from "react";
import Box from "components/atoms/Box/Box";
import { LinkedButton } from "components/atoms/Button/Button";
import SearchIcon from "assets/svg/SearchIcon";
import "./WritingControls.css";

export const WritingControls = () => {
  return (
    <Box className="writing-cntrl">
      <LinkedButton className="new-blog-btn" to="/write" label="✍️  글 쓰기" />
      <Box className="search-btn centered">
        <SearchIcon />
      </Box>
    </Box>
  );
};

export default WritingControls;
