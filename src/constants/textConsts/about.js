import {
  berProfile,
  herProfile,
  hobProfile,
  melProfile,
  sukProfile,
} from "assets/images/Team/0_teamImgExp";

const profileProps = (language) => {
  let profiles, explanation;
  if (language === "kr") {
    profiles = profilePropsKr;
    explanation = [
      <>
        궁궐의 도시 서울에서
        <br />
        궁의 가치와 이야기를 전달합니다.
      </>,
      <>
        문화재의 가치, 중요성, 역사성은 그 문화재 고유의 것이자 그것이 곧 우리의
        것입니다.
        <br />
        뻔히팩토리는 문화재가 가지고 있는 가치에 비해 그 중요성이 충분히
        전달되고 있지 않은 것이 아쉬웠습니다.
        <br />
        그래서 우리가 생각하는 가치를 우리만의 방식으로 전달해보기로 했습니다.
        <br />
        중요한 역사와 재미있는 이야기가 모여있는 서울의 5대 궁궐을 배경으로 먼저
        시작합니다.
      </>,
    ];
  } else {
    profiles = profilePropsEn;
    explanation = [
      <>
        We wish to deliver the values and stories
        <br />
        of the palaces of Seoul
      </>,
      <>
        문화재의 가치, 중요성, 역사성은 그 문화재 고유의 것이자 그것이 곧 우리의
        것입니다.
        <br />
        뻔히팩토리는 문화재가 가지고 있는 가치에 비해 그 중요성이 충분히
        전달되고 있지 않은 것이 아쉬웠습니다.
        <br />
        그래서 우리가 생각하는 가치를 우리만의 방식으로 전달해보기로 했습니다.
        <br />
        중요한 역사와 재미있는 이야기가 모여있는 서울의 5대 궁궐을 배경으로 먼저
        시작합니다.
      </>,
    ];
  }
  return { profiles, explanation };
};

const profilePropsKr = [
  { name: "손서연", imageSrc: berProfile, job: "게임 시나리오 / UI 디자인" },
  { name: "손영웅", imageSrc: herProfile, job: "iOS 개발자" },
  { name: "최서연", imageSrc: sukProfile, job: "iOS 개발자" },
  { name: "김해린", imageSrc: melProfile, job: "웹 콘텐츠 제작 / UI 디자인" },
  { name: "이진교", imageSrc: hobProfile, job: "웹 개발자" },
];

const profilePropsEn = [
  {
    name: "Son Seo Yeon",
    imageSrc: berProfile,
    job: "Game Scenario / UI Design",
  },
  { name: "Son Yong Oong", imageSrc: herProfile, job: "iOS Developer" },
  { name: "Choi Seo Yeon", imageSrc: sukProfile, job: "iOS Developer" },
  { name: "Kim Hae Rin", imageSrc: melProfile, job: "Web Content / UI Design" },
  { name: "Brian Lee", imageSrc: hobProfile, job: "Web Developer" },
];

export default profileProps;
