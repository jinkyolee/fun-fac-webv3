import {
  changduk,
  changgyeong,
  duksoo,
  gyeongbok,
  gyeonghui,
} from "assets/images/Timeline/0_timelineImgExp";

const palaceEvents = [
  {
    image: changduk,
    events: [
      {
        style: { type: "Basic" },
        date: 1405,
        eventName: "태조 이성계가 경복궁 창건",
      },
      {
        style: { type: "Basic" },
        date: 1592,
        eventName: `임진왜란으로 경복궁 소실`,
      },
      {
        style: {
          type: "Vertical",
          props: { dir: "top", height: "25px", width: "12px" },
        },
        date: 1610,
        eventName: "경복궁 중건 완료",
      },
      {
        style: {
          type: "Vertical",
          props: { dir: "bottom", height: "25px", width: "12px" },
        },
        date: 1623,
        eventName: "인조반정으로 창덕궁 대부분 소실",
      },
      {
        style: { type: "Basic" },
        date: 1824,
        eventName: "관물헌에서 갑신정변 발발",
      },
      {
        style: { type: "Basic" },
        date: 1926,
        eventName: "대조전에서 대한제국의 마지막 황제, 순종 승하",
      },
      {
        style: { type: "Basic" },
        date: 1997,
        eventName: "조선총독부 청사 설치로경복궁 가리게 됨",
      },
    ],
  },
  {
    image: changgyeong,
    events: [
      {
        style: { type: "Basic" },
        date: 1483,
        eventName: "성종이 옛 수강궁 터에 창경궁 창건 ",
      },
      {
        style: { type: "Basic" },
        date: 1592,
        eventName: "임진왜란으로 창경궁 소실",
      },
      {
        style: { type: "Basic" },
        date: 1762,
        eventName: "휘령전에서 영조와 사도세자의 사건,임오화변 발발",
      },
      {
        style: { type: "Basic" },
        date: 1909,
        eventName: "일본이 창경궁에 동・식물원 개설, 이름마저 창경원으로 격하",
      },
      {
        style: { type: "Basic" },
        date: 1983,
        eventName: "창경원→창경궁 본래 이름을 되찾음",
      },
    ],
  },
  {
    image: gyeongbok,
    events: [
      {
        style: { type: "Basic" },
        date: 1395,
        eventName: "태조 이성계가 경복궁 창건",
      },
      {
        style: { type: "Basic" },
        date: 1592,
        eventName: "임진왜란으로 경복궁 소실",
      },
      {
        style: { type: "Basic", props: {} },
        date: 1867,
        eventName: "경복궁 중건 완료",
      },
      {
        style: {
          type: "Vertical",
          props: { dir: "top", height: "30px", width: "12px" },
        },
        date: 1895,
        eventName: "명성황후 시해사건 발발 (을미사변)",
      },
      {
        style: {
          type: "Vertical",
          props: { dir: "bottom", height: "32.5px", width: "12px" },
        },
        date: 1926,
        eventName: "조선총독부 청사 설치로 경복궁 가리게 됨",
      },
    ],
  },
  {
    image: gyeonghui,
    events: [
      {
        style: { type: "Basic" },
        date: 1623,
        eventName: "광해군 때 조선후기의 이궁으로 경덕궁 창건",
      },
      {
        style: { type: "Basic" },
        date: 1762,
        eventName: "경덕궁→경희궁 명명",
      },
      {
        style: { type: "Basic" },
        date: 1910,
        eventName:
          "일본인을 위한 경성중학교가 들어서며 경희궁 면적이 절반으로 축소됨",
      },
      {
        style: { type: "Basic" },
        date: 1987,
        eventName: "정전 지역 복원",
      },
    ],
  },
  {
    image: duksoo,
    events: [
      {
        style: { type: "Basic" },
        date: 1611,
        eventName: "정릉동 행궁을 경운궁이라 명명",
      },
      {
        style: { type: "Top" },
        date: 1897,
        eventName: "태극전에서 고종이 대한제국을 선포",
      },
      {
        style: {
          type: "Vertical",
          props: { dir: "bottom", height: "32.5px", width: "27px" },
        },
        date: 1905,
        eventName: "수옥헌에서 을사늑약 체결",
      },
      {
        style: {
          type: "Vertical",
          props: { dir: "bottom", height: "90px", width: "12px" },
        },
        date: 1907,
        eventName: "경운궁→덕수궁 명명",
      },
      {
        style: {
          type: "Vertical",
          props: { dir: "top", height: "32.5px", width: "12px" },
        },
        date: 1933,
        eventName: "덕수궁을 공원으로 개조하여 일반에 공개",
      },
    ],
  },
];

export default palaceEvents;
