import React from "react";
import Box from "components/atoms/Box/Box";
import { LinkedButton } from "components/atoms/Button/Button";
import SearchIcon from "assets/svg/SearchIcon";
import "./WritingControls.css";
import { useRecoilValue } from "recoil";
import { languageState } from "recoil/atoms";

export const WritingControls = () => {
  const language = useRecoilValue(languageState);

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

  return (
    <Box className="writing-cntrl">
      <LinkedButton
        className="new-blog-btn"
        to="/community/write"
        label={language === "kr" ? "✍️  글 쓰기" : <>✍&nbsp;&nbsp;Post</>}
        onClick={(e) => checkLoginState(e)}
      />
      <Box className="search-btn centered">
        <SearchIcon />
      </Box>
    </Box>
  );
};

export default WritingControls;
