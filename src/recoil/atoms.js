import getPosts from "functions/local/Community/getPosts";
import { atom } from "recoil";

export const languageState = atom({
  key: "languageState",
  default: window.localStorage.getItem("languageSetting") || "kr",
});

export const loginState = atom({
  key: "loginState",
  default: window.localStorage.getItem("loginState"),
});

export const postsCollection = atom({
  key: "postsCollection",
  default: getPosts(),
});
