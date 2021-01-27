import React, { useState } from "react";
import Box, { ClickableBox } from "components/atoms/Box/Box";
import { LinkedButton } from "components/atoms/Button/Button";
import SearchIcon from "assets/svg/SearchIcon";
import { useRecoilValue } from "recoil";
import { languageState, postsCollection } from "recoil/atoms";
import "./WritingControls.css";
import { TextInput } from "components/atoms/Input/Input";
import { searchPosts } from "functions/local/Community/searchPosts";

export const WritingControls = ({ setDisplayContent }) => {
  const posts = useRecoilValue(postsCollection);
  const language = useRecoilValue(languageState);
  const [opened, setOpenState] = useState(false);
  const [search, setSearch] = useState("");

  const checkLoginState = (e) => {
    e.preventDefault();
    const loginState = JSON.parse(window.localStorage.getItem("loginState"));

    if (loginState === true) {
      console.log("Login confirmed");
      console.log(e);
      window.location.href = e.target.href;
    } else {
      console.log("No auth confirmed");
      window.alert("로그인이 필요한 기능입니다");
    }
  };

  const setSearchBtnState = () => {
    if (opened) {
      setOpenState(false);
    } else {
      setOpenState(true);
    }
  };

  const initSearch = () => {
    const searchedPosts = searchPosts(posts, search);
    setDisplayContent(searchedPosts);
  };

  const onInput = (event) => {
    if (event.code === "Enter") {
      event.preventDefault();
      initSearch();
    }
    event.Handled = true;
  };

  return (
    <Box className="writing-cntrl">
      <LinkedButton
        className="new-blog-btn"
        to="/community/write"
        label={language === "kr" ? "✍️  글 쓰기" : <>✍&nbsp;&nbsp;Post</>}
        onClick={(e) => checkLoginState(e)}
      />
      {opened ? (
        <Box className={`search-btn ${opened}`} onClick={setSearchBtnState}>
          <TextInput
            className="search-input"
            value={search}
            onChange={(e) => {
              e.preventDefault();
              setSearch(e.target.value);
            }}
            onKeyDown={onInput}
            onBlur={() => {
              setOpenState(false);
              setSearch("");
            }}
          />
          <ClickableBox onClick={() => initSearch()}>
            <SearchIcon className="search-icon" />
          </ClickableBox>
        </Box>
      ) : (
        <ClickableBox className={`search-btn`} onClick={setSearchBtnState}>
          <SearchIcon className="search-icon" />
        </ClickableBox>
      )}
    </Box>
  );
};

export default WritingControls;
