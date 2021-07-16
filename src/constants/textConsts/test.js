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
    logo = "궁비티아이";
    illust = testIllust;
    share = testShare;
    start = "테스트 시작";
  } else {
    text = (
      <>
        Find out the best match between
        <br />
        you and palaces!
      </>
    );
    logo = "GBTI";
    illust = testIllust;
    share = testShare;
    start = "test start";
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
          choiceText: ["럭셔리한 5성급 호텔"],
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
        { question: "I've been feeling" },
        {
          choiceText: ["bored lately,", "I need a new excitement!"],
          increaseFunc: () => {
            increasePoints(["duk", "soo"]);
          },
        },
        {
          choiceText: ["exhausted lately,", "I need relaxation!"],
          increaseFunc: () => {
            increasePoints(["bok", "hui"]);
          },
        },
      ],
      1: [
        { question: "When I’m traveling, I’d like to stay at" },
        {
          choiceText: ["airb*b, full of the local vibe "],
          increaseFunc: () => {
            increasePoints(["gyeong", "duk"]);
          },
        },
        {
          choiceText: ["luxurious five-star hotel"],
          increaseFunc: () => {
            increasePoints(["bok", "gyeong"]);
          },
        },
      ],
      2: [
        { question: "My go-cafe drink is?" },
        {
          choiceText: ["Americano!", "classic never dies"],
          increaseFunc: () => {
            increasePoints(["duk", "gyeong"]);
          },
        },
        {
          choiceText: ["Fruit smoothie.", "sweet is the best!"],
          increaseFunc: () => {
            increasePoints(["gyeong", "hui"]);
          },
        },
      ],
      3: [
        { question: "If I could leave right now, which city do you want to go?" },
        {
          choiceText: ["City of diversity, New York"],
          increaseFunc: () => {
            increasePoints(["hui", "duk"]);
          },
        },
        {
          choiceText: ["Romantic Paris"],
          increaseFunc: () => {
            increasePoints(["bok", "duk"]);
          },
        },
      ],
      4: [
        { question: "My favorite movie genre is" },
        {
          choiceText: ["drama & romance", "e.g. Titanic, About time"],
          increaseFunc: () => {
            increasePoints(["gyeong", "bok"]);
          },
        },
        {
          choiceText: ["science fiction", "e.g. Inception, Matrix"],
          increaseFunc: () => {
            increasePoints(["gyeong", "hui"]);
          },
        },
      ],
      5: [
        {
          question:
            "You have a free ticket for cultural life. What is Your choice? ",
        },
        {
          choiceText: ["go amusement park with friends"],
          increaseFunc: () => {
            increasePoints(["duk", "soo"]);
            setResult(points.current);
          },
        },
        {
          choiceText: ["an exhibition with", "quiet ontemplation"],
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
