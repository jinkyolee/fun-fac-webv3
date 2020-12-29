import { selector } from "recoil";
import { languageState } from "./atoms";
import evilNightKr from "../assets/evil-night-kr.epub";
import evilNightEn from "../assets/evil-night-en.epub";

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
    }
  },
});
