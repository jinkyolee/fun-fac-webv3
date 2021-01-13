import React from "react";
import { HeaderInstance as Header } from "components/0_Instances/HeaderInstance";
import { Box } from "components/atoms/Box/Box";
import { Image } from "components/atoms/Image/Image";
import { Text } from "components/atoms/Text/Text";
import { PersonItem } from "components/molecules/TeamIntro/PersonItem/PersonItem";
import StandardPage from "components/templates/StandardPage";
import profileProps from "constants/profile";
import "./About.css";

export const AboutTeam = () => {
  return (
    <StandardPage
      header={<Header />}
      body={
        <Box
          className="vertical-flex"
          style={{ width: "100%", marginTop: "90px" }}
        >
          <Box className="about-section">
            <Box className="about-banner funfac-styled gotham">
              <Text>About</Text>
            </Box>
            <Text
              className="bold sub-heading centered"
              style={{
                marginTop: "8.5rem",
                color: "#00249c",
                lineHeight: "40px",
              }}
            >
              궁궐의 도시 서울에서
              <br />
              궁의 가치와 이야기를 전달합니다.{" "}
            </Text>
            <Text
              className="body centered"
              style={{ marginTop: "35px", lineHeight: "25px" }}
            >
              문화재의 가치, 중요성, 역사성은 그 문화재 고유의 것이자 그것이 곧
              우리의 것입니다.
              <br />
              뻔히팩토리는 문화재가 가지고 있는 가치에 비해 그 중요성이 충분히
              전달되고 있지 않은 것이 아쉬웠습니다.
              <br />
              그래서 우리가 생각하는 가치를 우리만의 방식으로 전달해보기로
              했습니다.
              <br />
              중요한 역사와 재미있는 이야기가 모여있는 서울의 5대 궁궐을
              배경으로 먼저 시작합니다.
            </Text>
          </Box>
          <Box className="about-section">
            <Box className="about-banner funfac-styled gotham">
              <Text>Team</Text>
            </Box>
            <Box className="profile-container">
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
