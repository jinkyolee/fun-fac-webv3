import React from "react";
import { gameIcon, storeLink } from "assets/images/Game/0_gameImgExp";
import StandardPage from "components/templates/StandardPage";
import { HeaderInstance as Header } from "components/0_Instances/HeaderInstance";
import { Image, LinkedImage } from "components/atoms/Image/Image";
import { Box } from "components/atoms/Box/Box";
import { Text } from "components/atoms/Text/Text";

export const GameIntroduction = () => {
  return (
    <StandardPage
      className="centered full"
      header={<Header />}
      body={
        <Box className="horizontal-flex" style={{ alignItems: "center" }}>
          <Image src={gameIcon} className="large" />
          <Box
            className="vertical-flex align-start"
            style={{
              marginLeft: "50px",
              width: "25rem",
              justifyContent: "space-around",
            }}
          >
            <Text className="sub-heading bold" style={{ marginBottom: "15px" }}>
              마지막 1초
            </Text>
            <Text className="body" style={{ marginBottom: "15px" }}>
              “너만이 유일한 희망이다.”
              <br />
              “네가 바꾸는 그 1초가 나를, 그리고 이 나라를 바꾸는 것이니까.”
              <br />
              <br />
              2112년 대한민국, 엄마도 아빠도 없는 주인공 이단희의 조용하던 삶에
              폭풍이 휘몰아칩니다. 조선과 이 나라의 신인 휘령이 그녀만이 과거를
              바꾸어 그의 힘을 되찾을 수 있다고 말합니다. 그녀는 가진 힘도,
              능력도 없는 평범한 학생일 뿐. 자칫 잘못하면 과거에 영원히 갇혀버릴
              수도 있다는데....
              <br />
              <br />
              과거이자 현재, 그리고 미래를 바꾸는 단 1초.
              <br />
              당신은 어떤 선택을 하겠습니까?
            </Text>
            <LinkedImage
              src={storeLink}
              className="smallH"
              to="https://www.apple.com/apple-arcade/"
            />
          </Box>
        </Box>
      }
    />
  );
};

export default GameIntroduction;
