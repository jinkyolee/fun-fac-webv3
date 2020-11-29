import React from "react";
import { gameIcon, storeLink } from "../images/0_images";
import StandardPage from "../components/templates/StandardPage";
import { HeaderInstance as Header } from "../components/0_Instances/HeaderInstance";
import { Image, LinkedImage } from "../components/atoms/ImageComp/ImageComp";
import { Box } from "../components/atoms/Box/Box";
import { Text } from "../components/atoms/Text/Text";

export const GameIntroduction = () => {
  return (
    <StandardPage
      className="centered full"
      header={<Header />}
      body={
        <Box className="horizontal-flex">
          <Image src={gameIcon} className="large" alt="" />
          <Box
            className="vertical-flex align-start"
            style={{
              marginLeft: "50px",
              width: "25rem",
              justifyContent: "space-around",
            }}
          >
            <Text className="sub-heading bold">게임 이름 텍스트 박스</Text>
            <Text className="body">
              게임 소개 텍스트. 다음은 대체 텍스트
              <br /> <br />
              국토와 자원은 국민의 보호를 받으며, 국가는 그 균형있는 개발과
              이용을 위하여 필요한 계획을 수립한다. 법률이 헌법에 위반 되는
              여부가 재판의 전제가 된 경우에는 법원은 헌법재판소에 제청하여 그
              심판에 의하여 판단된다.
            </Text>
            <LinkedImage
              src={storeLink}
              className="smallH"
              to="https://www.apple.com/apple-arcade/"
              alt=""
            />
          </Box>
        </Box>
      }
    />
  );
};
