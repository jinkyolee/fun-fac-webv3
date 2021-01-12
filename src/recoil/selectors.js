import { selector } from "recoil";
import { languageState, loginState } from "./atoms";
import evilNightKr from "assets/evil-night-kr.epub";
import evilNightEn from "assets/evil-night-en.epub";
import Button, { LinkedButton } from "components/atoms/Button/Button";
import { authService } from "fbaseInst/fbase";

export const ebookURLState = selector({
  key: "ebookURLState",
  get: ({ get }) => {
    const language = get(languageState);

    switch (language) {
      case "kr":
        return evilNightKr;
      case "en":
        return evilNightEn;
      default:
        break;
    }
  },
});

export const fontState = selector({
  key: "fontState",
  get: ({ get }) => {
    const language = get(languageState);

    switch (language) {
      case "kr":
        return "'Noto Sans KR', sans-serif";
      case "en":
        return "";
      default:
        break;
    }
  },
});

export const headerTabs = selector({
  key: "headerTabs",
  get: ({ get }) => {
    const loggedIn = get(loginState);
    const language = get(languageState);

    if (!loggedIn) {
      return [
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
          to="/persons"
          label={language === "kr" ? "인물" : "Person"}
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
    } else {
      return [
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
          to="/persons"
          label={language === "kr" ? "인물" : "Person"}
          key="6"
          className="tab"
        />,
        <LinkedButton
          to="/community"
          label={language === "kr" ? "커뮤니티" : "Forum"}
          key="7"
          className="tab"
        />,
        <Button
          className="tab"
          key="8"
          label={languageState === "kr" ? "로그아웃" : "Logout"}
          onClick={() => authService.signOut()}
        />,
      ];
    }
  },
});
