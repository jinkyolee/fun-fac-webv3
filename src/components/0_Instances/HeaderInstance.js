import React, { useState } from "react";
import Header, { HeaderMobile } from "components/molecules/Header/Header";
import Box from "components/atoms/Box/Box";
import { LinkedImage } from "components/atoms/Image/Image";
import { Button, LinkedButton } from "components/atoms/Button/Button";
import { useRecoilState, useRecoilValue } from "recoil";
import { languageState, loginState } from "recoil/atoms";
import { headerTabs } from "recoil/selectors";
import { authService } from "fbaseInst/fbase";
import { logo } from "assets/images/0_images";
import "./HeaderInstance.css";
import getDeviceWidth from "functions/getDeviceWidth";
import ListIcon from "assets/svg/Community/ListIcon";

export const HeaderInstance = () => {
  const [language, setLanguage] = useRecoilState(languageState);
  const loggedIn = useRecoilValue(loginState);
  const [toggled, setToggled] = useState(false);
  const tabs = useRecoilValue(headerTabs);
  const deviceType = getDeviceWidth();

  const toggleHeader = () => {
    const header =
      document.querySelector(".header") ||
      document.querySelector(".header-mobile");
    if (!header.classList.contains("opened")) {
      setTimeout(() => header.classList.replace("toggled", "opened"), 985);
      header.classList.remove("closed");
      header.classList.add("toggled");
      setToggled(true);
    } else {
      setTimeout(() => header.classList.replace("untoggled", "closed"), 985);
      header.classList.remove("opened");
      header.classList.add("untoggled");
      setToggled(false);
    }
  };

  if (deviceType === "large" || deviceType === "medium") {
    return (
      <Header
        firstCol={[
          <Button
            className="lang-btn gotham"
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
            label="한 / En"
            key={0}
          />,
          <LinkedImage src={logo} className="logo" to="/" key={1} />,
          <Box
            className="horizontal-flex"
            style={{
              margin: "15px 50px 0 0",
              alignItems: "center",
              height: "26px",
            }}
            key={2}
          >
            {loggedIn ? (
              <Button
                className="home-auth-btn gotham"
                key="8"
                label={languageState === "kr" ? "로그아웃" : "Logout"}
                onClick={() => authService.signOut()}
              />
            ) : (
              <LinkedButton
                className="home-auth-btn gotham"
                to="/login"
                label={languageState === "kr" ? "로그인" : "Login"}
              />
            )}
            <Button
              className="toggle-menu gotham"
              onClick={toggleHeader}
              label="Menu"
            />
          </Box>,
        ]}
        secondCol={tabs}
        thirdCol={
          toggled && (
            <Box className="last-wrap">
              <LinkedButton
                to="/game"
                label="GAME"
                key={0}
                className="tab last gotham"
              />
              <LinkedButton
                to="/team"
                label="ABOUT US"
                key={1}
                className="tab last gotham"
              />
            </Box>
          )
        }
      />
    );
  } else if (deviceType === "small") {
    return (
      <HeaderMobile
        firstCol={
          <Button
            className="toggle-menuM"
            label={<ListIcon />}
            onClick={toggleHeader}
          />
        }
        dropdown={toggled && <Box className="vertical-flex"></Box>}
      />
    );
  }
};

export default HeaderInstance;
