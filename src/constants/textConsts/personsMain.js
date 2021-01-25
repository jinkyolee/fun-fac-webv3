import {
  ahnhThumbnail,
  dukhyeThumbnail,
  kimyThumbnail,
  sadoThumbnail,
  sejongThumbnail,
} from "assets/images/Persons/0_personImgExp";
import PersonThumbnail, {
  PreparingThumbnail,
} from "components/molecules/PersonPage/PersonThumbnail/PersonThumbnail";

const personCollectionKr = {
  historical: [
    <PersonThumbnail
      src={sejongThumbnail}
      title="경복궁 그리고 백성을 사랑했던 세종"
      subtitle={
        <>
          세종대왕이 훈민정음 창제의
          <br />
          고민을 시작하고 탄생한 곳, 경복궁
        </>
      }
      to="sejong"
      key={0}
    />,
    <PersonThumbnail
      src={dukhyeThumbnail}
      title="창덕궁 낙선재와 덕혜옹주"
      subtitle={
        <>
          조선의 마지막 황녀 덕혜옹주 그리고
          <br />
          창덕궁 낙선재
        </>
      }
      to="dukhye"
      key={1}
    />,
    <PersonThumbnail
      src={sadoThumbnail}
      title="창경궁 문정전에서 일어난 일"
      subtitle={
        <>
          영조와 사도세자 그리고 뒤주에 얽힌
          <br />
          창경궁의 비극
        </>
      }
      to="sado"
      key={2}
    />,
  ],
  modern: [
    <PersonThumbnail
      src={ahnhThumbnail}
      title="계속 숨쉬는 시간의 흔적을 이야기하다"
      subtitle={
        <>
          누구보다 궁에 진심인
          <br />
          궁노리터 안희선 역사여행 가이드를 만나보세요.
        </>
      }
      to="0"
      key={0}
    />,
    <PersonThumbnail
      src={kimyThumbnail}
      title="현재와 과거를 잇는 문화재"
      subtitle={
        <>
          문화재 사랑이 남다른 10대 청소년 김용건 학생을
          <br />
          만나보세요.
        </>
      }
      to="kimy"
      key={1}
    />,
    <PreparingThumbnail key={2} />,
  ],
};

const personCollectionEn = {
  historical: [
    <PersonThumbnail
      src={sejongThumbnail}
      title="경복궁 그리고 백성을 사랑했던 세종"
      subtitle={
        <>
          세종대왕이 훈민정음 창제의
          <br />
          잉글리쉬
        </>
      }
      to="sejong"
      key={0}
    />,
    <PersonThumbnail
      src={dukhyeThumbnail}
      title="창덕궁 낙선재와 덕혜옹주"
      subtitle={
        <>
          조선의 마지막 황녀 덕혜옹주 그리고
          <br />
          창덕궁 낙선재
        </>
      }
      to="dukhye"
      key={1}
    />,
    <PersonThumbnail
      src={sadoThumbnail}
      title="창경궁 문정전에서 일어난 일"
      subtitle={
        <>
          영조와 사도세자 그리고 뒤주에 얽힌
          <br />
          창경궁의 비극
        </>
      }
      to="sado"
      key={2}
    />,
  ],
  modern: [
    <PersonThumbnail
      src={ahnhThumbnail}
      title="계속 숨쉬는 시간의 흔적을 이야기하다"
      subtitle={
        <>
          누구보다 궁에 진심인
          <br />
          궁노리터 안희선 역사여행 가이드를 만나보세요.
        </>
      }
      to="0"
      key={0}
    />,
    <PersonThumbnail
      src={kimyThumbnail}
      title="현재와 과거를 잇는 문화재"
      subtitle={
        <>
          문화재 사랑이 남다른 10대 청소년 김용건 학생을
          <br />
          만나보세요.
        </>
      }
      to="kimy"
      key={1}
    />,
    <PreparingThumbnail key={2} />,
  ],
};

const personMainText = (language) => {
  let labels, personStuff;
  if (language === "kr") {
    labels = [
      "궁의 옛 주인들 이야기",
      <>
        오늘날
        <br />
        궁을 이야기하는 사람들
      </>,
    ];
    personStuff = personCollectionKr;
  } else {
    labels = ["Historical", "Modern"];
    personStuff = personCollectionEn;
  }

  return { labels, personStuff };
};

export default personMainText;
