import React from "react";
import Header from "components/molecules/Header/Header";
import { logoImage } from "assets/images/0_images";
import { LinkedImage } from "components/atoms/Image/Image";
import { Button } from "components/atoms/Button/Button";
import { useRecoilState, useRecoilValue } from "recoil";
import { languageState } from "recoil/atoms";
import { headerTabs } from "recoil/selectors";

export const HeaderInstance = () => {
  const [language, setLanguage] = useRecoilState(languageState);
  const tabs = useRecoilValue(headerTabs);

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

            window.localStorage.setItem("languageSetting", newLang);
            setLanguage(newLang);
          }}
          label={language === "kr" ? "English" : "한국어"}
          className="lang-btn"
        />
      }
    />
  );
};

export default HeaderInstance;
