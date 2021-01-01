import React from "react";
import Header from "components/molecules/Header/Header";
import { logoImage } from "assets/images/0_images";
import { LinkedImage } from "components/atoms/Image/Image";
import { Button, LinkedButton } from "components/atoms/Button/Button";
import { useRecoilState } from "recoil";
import { languageState } from "recoil/atoms";

export const HeaderInstance = () => {
  const [language, setLanguage] = useRecoilState(languageState);
  const tabs = [
    <LinkedButton
      to="/game"
      label={language === "kr" ? "게임" : "Game"}
      key="1"
      className="tab"
    />,
    <LinkedButton
      to="/story"
      label={language === "kr" ? "스토리" : "Story"}
      key="2"
      className="tab"
    />,
    <LinkedButton
      to="/team"
      label={language === "kr" ? "팀" : "Team"}
      key="3"
      className="tab"
    />,
    <LinkedButton
      to="/test"
      label={language === "kr" ? "테스트" : "Test"}
      key="4"
      className="tab"
    />,
    <LinkedButton
      to="/timeline"
      label={language === "kr" ? "타임라인" : "Timeline"}
      key="5"
      className="tab"
    />,
    <LinkedButton
      to="/persons/sejong"
      label={language === "kr" ? "세종" : "Sejong"}
      key="6"
      className="tab"
    />,
    <LinkedButton
      to="/community"
      label={language === "kr" ? "커뮤니티" : "Forum"}
      key="7"
      className="tab"
    />,
    <LinkedButton
      to="/signup"
      label={language === "kr" ? "회가" : "Signup"}
      key="8"
      className="tab"
    />,
    <LinkedButton
      to="/login"
      label={language === "kr" ? "로그" : "Login"}
      key="9"
      className="tab"
    />,
  ];

  return (
    <Header
      firstCol={<LinkedImage src={logoImage} className="logo" to="/" />}
      secondCol={tabs}
      thirdCol={
        <Button
          onClick={(e) => {
            e.preventDefault();
            let newLang;
            if (language === "kr") {
              newLang = "en";
            } else {
              newLang = "kr";
            }
            setLanguage(newLang);
          }}
          label={language === "kr" ? "English" : "한국어"}
          className="lang-btn"
        />
      }
    />
  );
};

export default Header;
