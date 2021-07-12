import React, { useState } from "react";
import Header, { HeaderMobile } from "components/molecules/Header/Header";
import Box from "components/atoms/Box/Box";
import { LinkedImage } from "components/atoms/Image/Image";
import { Button, LinkedButton } from "components/atoms/Button/Button";
import { useRecoilState, useRecoilValue } from "recoil";
import { languageState, loginState } from "recoil/atoms";
import { headerTabs } from "recoil/selectors";
import { authService } from "fbaseInst/fbase";
import "./HeaderInstance.css";
import getDeviceWidth from "functions/getDeviceWidth";
import { ListIconBlue as ListIcon } from "assets/svg/Community/ListIcon";

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
    const body = document.querySelector("body");
    if (!header.classList.contains("opened")) {
      setTimeout(() => header.classList.replace("toggled", "opened"), 485);
      header.classList.remove("closed");
      header.classList.add("toggled");
      if (deviceType === "small") {
        body.style.overflowY = "hidden";
      }
      setToggled(true);
    } else {
      setTimeout(() => header.classList.replace("untoggled", "closed"), 485);
      header.classList.remove("opened");
      header.classList.add("untoggled");
      if (deviceType === "small") {
        body.style.overflowY = "scroll";
      }
      setToggled(false);
    }
  };

  if (deviceType === "large" || deviceType === "medium") {
    return (
      <Header
        firstCol={[
          <Button
          // gotham was here
            className="lang-btn"
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
            label={language === "kr" ? <label><strong>한</strong>{` / EN`}</label> : <label>{`한 / `} <strong>EN</strong></label> }
            key={0}
          />,
          <div className="logo-container">
            <LinkedImage src={require("assets/images/logo.png").default} className="logo" to="/" alt="메인 페이지" key={1} />
          </div>,
          <Box
            className="horizontal-flex"
            key={2}
          >
            {loggedIn ? (
              <Button
                className="home-auth-btn"
                key="8"
                label={language === "kr" ? "로그아웃" : "LOG-OUT"}
                onClick={() => authService.signOut()}
              />
            ) : (
              <LinkedButton
                className="home-auth-btn"
                to="/login"
                label={language === "kr" ? "로그인" : "LOG-IN"}
              />
            )}
            <Button
              className="toggle-menu"
              onClick={toggleHeader}
              label={language === "kr" ? "메뉴" : "MENU"}
            />
          </Box>,
        ]}
        secondCol={tabs.map(({ url, label }, index) => {
          return (
            <LinkedButton to={url} label={label} className="tab" key={index} />
          );
        })}
        thirdCol={
          toggled && (
            <div id="las">
            <Box className="last-wrap">
              <LinkedButton
                to="/game"
                label="GAME"
                key={0}
                className="tab last "
              />
              <LinkedButton
                to="/team"
                label="ABOUT US"
                key={1}
                className="tab last "
              />
            </Box>
            </div>
          )
        }
      />
    );
  } else if (deviceType === "small") {
    return (
      <HeaderMobile
        firstCol={
          <>
            <Button
              className="toggle-menuM"
              label={<ListIcon />}
              onClick={toggleHeader}
            />
            {toggled && (
              <Button
                className="lang-btn mobile gotham"
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
              />
            )}
          </>
        }
        dropdown={
          toggled && (
            <Box className="vertical-flex" style={{ alignItems: "center" }}>
              {tabs.map(({ url, label }, index) => {
                return (
                  <LinkedButton
                    to={url}
                    label={label}
                    className="tab mobile"
                    key={index}
                  />
                );
              })}
              <Box className="vertical-flex centered tab-box">
                <LinkedButton
                  to="/game"
                  label="GAME"
                  key={0}
                  className="tab mobile gotham"
                />
                <LinkedButton
                  to="/team"
                  label="ABOUT US"
                  key={1}
                  className="tab mobile gotham"
                />
              </Box>
              <Box
                className="vertical-flex centered"
                style={{ position: "fixed", bottom: "2.75rem" }}
              >
                {loggedIn ? (
                  <Button
                    className="home-auth-btn mobile"
                    key="8"
                    label={languageState === "kr" ? "로그아웃" : "LOGOUT"}
                    onClick={() => authService.signOut()}
                  />
                ) : (
                  <LinkedButton
                    className="home-auth-btn mobile"
                    to="/login"
                    label={languageState === "kr" ? "로그인" : "LOGIN"}
                  />
                )}
                <LinkedImage src={require("assets/images/logo.png").default} className="logo mobile" to="/" />
              </Box>
            </Box>
          )
        }
      />
    );
  }
};

export default HeaderInstance;
