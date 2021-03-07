import { selector } from "recoil";
import { languageState, postsCollection } from "./atoms";

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
      {
        url: "/timeline",
        label: language === "kr" ? "5대궁과 함께한 시간" : "Timeline",
      },
      {
        url: "/test",
        label: language === "kr" ? "궁 추천 테스트" : "Test",
      },
      {
        url: "/test",
        label: language === "kr" ? "궁 추천 테스트" : "Test",
      },
      {
        url: "/persons",
        label: language === "kr" ? "인물 포커스" : "Person",
      },
      {
        url: "/community",
        label: language === "kr" ? "커뮤니티" : "Forum",
      },
    ];
  },
});

export const filteredPosts = selector({
  key: "filteredPosts",
  get: ({ get }) => {
    const posts = get(postsCollection);
    let palacePosts = [],
      gamePosts = [];

    posts.forEach((post) => {
      if (post.flair === "palace") {
        palacePosts.push(post);
      } else {
        gamePosts.push(post);
      }
    });

    return { palacePosts, gamePosts };
  },
});
