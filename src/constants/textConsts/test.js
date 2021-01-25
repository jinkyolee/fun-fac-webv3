import {
  testIllust,
  testLogo,
  testShare,
  testStart,
} from "assets/images/Test/0_testImgExp";

export const pendingText = (language) => {
  let text, logo, illust, share, start;
  if (language === "kr") {
    text = (
      <>
        각기 다른 매력과 분위기의 조선 5대궁 중<br />
        나와 찰떡인 궁은?
      </>
    );
    logo = testLogo;
    illust = testIllust;
    share = testShare;
    start = testStart;
  } else {
    text = (
      <>
        Which of the five
        <br />
        Great Palaces fits you
      </>
    );
    logo = testLogo;
    illust = testIllust;
    share = testShare;
    start = testStart;
  }
  return { text, logo, illust, share, start };
};

export const inProgressText = (language, setResult, increasePoints, points) => {
  if (language === "kr") {
    return {
      0: [
        { question: "요즘 나는 말이야" },
        {
          choiceText: ["지루하고 따분..", "새로운 자극이 필요해!"],
          increaseFunc: () => {
            increasePoints(["duk", "soo"]);
          },
        },
        {
          choiceText: ["몸도 마음도 지쳤어", "힐링이 필요해!"],
          increaseFunc: () => {
            increasePoints(["bok", "hui"]);
          },
        },
      ],
      1: [
        { question: "해외 여행에서 내가 머물고 싶은 숙소는?" },
        {
          choiceText: ["현지 느낌 충만한 에어비*비"],
          increaseFunc: () => {
            increasePoints(["gyeong", "duk"]);
          },
        },
        {
          choiceText: ["감성가득 파리의 거리"],
          increaseFunc: () => {
            increasePoints(["bok", "gyeong"]);
          },
        },
      ],
      2: [
        { question: "나의 최애 카페 음료는?" },
        {
          choiceText: ["클래식은 영원하다!", "아메리카노"],
          increaseFunc: () => {
            increasePoints(["duk", "gyeong"]);
          },
        },
        {
          choiceText: ["단 게 최고!", "과일 스무디"],
          increaseFunc: () => {
            increasePoints(["gyeong", "hui"]);
          },
        },
      ],
      3: [
        { question: "떠날 수만 있다면, 내가 당장 가고 싶은 여행지는?" },
        {
          choiceText: ["다채로움의 도시 뉴욕"],
          increaseFunc: () => {
            increasePoints(["hui", "duk"]);
          },
        },
        {
          choiceText: ["감성가득 파리의 거리"],
          increaseFunc: () => {
            increasePoints(["bok", "duk"]);
          },
        },
      ],
      4: [
        { question: "내가 좋아하는 영화는?" },
        {
          choiceText: ["타이타닉 , 어바웃타임같은", "드라마&로맨스 장르"],
          increaseFunc: () => {
            increasePoints(["gyeong", "bok"]);
          },
        },
        {
          choiceText: ["인셉션, 매트릭스같은 SF 장르 "],
          increaseFunc: () => {
            increasePoints(["gyeong", "hui"]);
          },
        },
      ],
      5: [
        {
          question:
            "문화 생활에 쓸 수 있는 3만원짜리 티켓이 생겼다. 나의 선택은?",
        },
        {
          choiceText: ["오랜만에 친구들과 놀이공원"],
          increaseFunc: () => {
            increasePoints(["duk", "soo"]);
            setResult(points.current);
          },
        },
        {
          choiceText: ["조용히 사색하며 즐기는 전시회"],
          increaseFunc: () => {
            increasePoints(["soo", "gyeong"]);
            setResult(points.current);
          },
        },
      ],
    };
  } else {
    return {
      0: [
        { question: "요즘 나는 말이야" },
        {
          choiceText: ["지루하고 따분..", "새로운 자극이 필요해!"],
          increaseFunc: () => {
            increasePoints(["duk", "soo"]);
          },
        },
        {
          choiceText: ["몸도 마음도 지쳤어", "힐링이 필요해!"],
          increaseFunc: () => {
            increasePoints(["bok", "hui"]);
          },
        },
      ],
      1: [
        { question: "해외 여행에서 내가 머물고 싶은 숙소는?" },
        {
          choiceText: ["현지 느낌 충만한 에어비*비"],
          increaseFunc: () => {
            increasePoints(["gyeong", "duk"]);
          },
        },
        {
          choiceText: ["감성가득 파리의 거리"],
          increaseFunc: () => {
            increasePoints(["bok", "gyeong"]);
          },
        },
      ],
      2: [
        { question: "나의 최애 카페 음료는?" },
        {
          choiceText: ["클래식은 영원하다!", "아메리카노"],
          increaseFunc: () => {
            increasePoints(["duk", "gyeong"]);
          },
        },
        {
          choiceText: ["단 게 최고!", "과일 스무디"],
          increaseFunc: () => {
            increasePoints(["gyeong", "hui"]);
          },
        },
      ],
      3: [
        { question: "떠날 수만 있다면, 내가 당장 가고 싶은 여행지는?" },
        {
          choiceText: ["다채로움의 도시 뉴욕"],
          increaseFunc: () => {
            increasePoints(["hui", "duk"]);
          },
        },
        {
          choiceText: ["감성가득 파리의 거리"],
          increaseFunc: () => {
            increasePoints(["bok", "duk"]);
          },
        },
      ],
      4: [
        { question: "내가 좋아하는 영화는?" },
        {
          choiceText: ["타이타닉 , 어바웃타임같은", "드라마&로맨스 장르"],
          increaseFunc: () => {
            increasePoints(["gyeong", "bok"]);
          },
        },
        {
          choiceText: ["인셉션, 매트릭스같은 SF 장르 "],
          increaseFunc: () => {
            increasePoints(["gyeong", "hui"]);
          },
        },
      ],
      5: [
        {
          question:
            "문화 생활에 쓸 수 있는 3만원짜리 티켓이 생겼다. 나의 선택은?",
        },
        {
          choiceText: ["오랜만에 친구들과 놀이공원"],
          increaseFunc: () => {
            increasePoints(["duk", "soo"]);
            setResult(points.current);
          },
        },
        {
          choiceText: ["조용히 사색하며 즐기는 전시회"],
          increaseFunc: () => {
            increasePoints(["soo", "gyeong"]);
            setResult(points.current);
          },
        },
      ],
    };
  }
};

export const resultText = () => {};
