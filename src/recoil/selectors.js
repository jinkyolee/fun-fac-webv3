import { selector } from "recoil";
import { languageState } from "./atoms";
import { LinkedButton } from "components/atoms/Button/Button";

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
    const language = get(languageState);

    return [
      <LinkedButton
        to="/timeline"
        label={language === "kr" ? "5대궁과 함께한 시간" : "Timeline"}
        key="0"
        className="tab"
      />,
      <LinkedButton
        to="/test"
        label={language === "kr" ? "궁 추천 테스트" : "Test"}
        key="1"
        className="tab"
      />,
      <LinkedButton
        to="/persons"
        label={language === "kr" ? "인물 포커스" : "Person"}
        key="2"
        className="tab"
      />,
      <LinkedButton
        to="/community"
        label={language === "kr" ? "커뮤니티" : "Forum"}
        key="3"
        className="tab"
      />,
    ];
  },
});
