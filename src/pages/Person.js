import React from "react";
import { HeaderInstance as Header } from "components/0_Instances/HeaderInstance";
import Box from "components/atoms/Box/Box";
import Image from "components/atoms/Image/Image";
import Text from "components/atoms/Text/Text";
import StandardPage from "components/templates/StandardPage";
import sejongData from "constants/personData";
import { sejong } from "assets/images/0_images";
import PersonExplanation from "components/molecules/PersonPage/PersonExplanation";

export const PersonPage = () => {
  return (
    <StandardPage
      className="fullW"
      header={<Header />}
      body={
        <Box className="vertical-flex fullW align-center">
          <Box className="vertical-flex align-center">
            <Text
              className="super-bold"
              style={{ marginTop: "150px", fontSize: "38px" }}
            >
              리더십과 성과로 백성을 사랑하는 마음을 베푼 왕, 세종
            </Text>
            <Text className="super-body" style={{ marginTop: "20px" }}>
              세종대왕이 훈민정음 창제의 고민을 시작하고 탄생한 곳,
              경복궁입니다.
            </Text>
          </Box>
          <Image
            className="person-image"
            src={sejong}
            style={{
              position: "absolute",
              right: "30px",
              top: "70px",
              width: "185px",
            }}
          />
          <Box
            className="vertical-flex"
            style={{
              width: "750px",
              marginTop: "140px",
            }}
          >
            {sejongData.map(({ title, body }, index) => {
              return (
                <PersonExplanation title={title} body={body} key={index} />
              );
            })}
          </Box>
        </Box>
      }
    />
  );
};

export default PersonPage;
