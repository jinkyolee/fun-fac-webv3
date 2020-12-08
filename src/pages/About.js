import React from "react";
import { HeaderInstance as Header } from "../components/0_Instances/HeaderInstance";
import { Box } from "../components/atoms/Box/Box";
import { Image } from "../components/atoms/ImageComp/ImageComp";
import { Text } from "../components/atoms/Text/Text";
import { PersonItem } from "../components/molecules/PersonItem/PersonItem";
import StandardPage from "../components/templates/StandardPage";
import { teamLogo } from "../assets/images/0_images";
import profileProps from "../constants/profile";

export const AboutTeam = () => {
  return (
    <StandardPage
      className="centered"
      header={<Header />}
      body={
        <Box className="vertical-flex" style={{ marginTop: "100px" }}>
          <Box className="vertical-flex align-center">
            <Image src={teamLogo} className="mediumW" />
            <Text
              className="sub-heading bold centered"
              style={{ marginTop: "30px" }}
            >
              제목 텍스트
            </Text>
            <Text
              className="body centered"
              style={{ width: "600px", marginTop: "30px" }}
            >
              팀 소개 텍스트 박스. 뻔히팩토리가 활동하는 이유를 이야기합니다.
              다음은 대체 텍스트입니다. 훈장등의 영전은 이를 받은 자에게만
              효력이 있고, 어떠한 특권도 이에 따르지 아니한다. 대통령후보자가
              1인일 때에는 그 득표수가 선거권자 총수의 3분의 1 이상이 아니면
              대통령으로 당선될 수 없다.
            </Text>
          </Box>
          <Box className="vertical-flex" style={{ marginTop: "70px" }}>
            <Text className="sub-heading bold centered">제목 텍스트</Text>
            <Text className="body centered" style={{ marginTop: "30px" }}>
              팀원 한 줄 소개 텍스트. 뻔히팩토리 팀이 어디서 시작되었는지
              간략하게 소개합니다.
            </Text>
            <Box
              className="horizontal-flex"
              style={{ marginTop: "40px", marginBottom: "100px" }}
            >
              {profileProps.map(({ name, imageSrc, job }, index) => {
                return (
                  <PersonItem
                    name={name}
                    imageSrc={imageSrc}
                    job={job}
                    key={index}
                  />
                );
              })}
            </Box>
          </Box>
        </Box>
      }
    />
  );
};

export default AboutTeam;
