import React from "react";
import Header from "../organisms/Header/Header";
import { logoImage } from "../../assets/images/0_images";
import { LinkedImage } from "../atoms/Image/Image";
import { Button, LinkButton } from "../atoms/Button/Button";
import { useRecoilState } from "recoil";
import { languageState } from "../../recoil/atoms";

export const HeaderInstance = () => {
  const [language, setLanguage] = useRecoilState(languageState);

  return (
    <Header
      firstCol={<LinkedImage src={logoImage} className="logo" to="/" />}
      secondCol={[
        <LinkButton
          to="/game"
          label={language === "kr" ? "게임" : "Game"}
          key="1"
          className="tab"
        />,
        <LinkButton
          to="/story"
          label={language === "kr" ? "스토리" : "Story"}
          key="2"
          className="tab"
        />,
        <LinkButton
          to="/team"
          label={language === "kr" ? "팀" : "Team"}
          key="3"
          className="tab"
        />,
        <LinkButton
          to="/test"
          label={language === "kr" ? "테스트" : "Test"}
          key="4"
          className="tab"
        />,
        <LinkButton
          to="/timeline"
          label={language === "kr" ? "타임라인" : "Timeline"}
          key="5"
          className="tab"
        />,
        <LinkButton
          to="/persons/sejong"
          label={language === "kr" ? "세종" : "Sejong"}
          key="6"
          className="tab"
        />,
      ]}
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
