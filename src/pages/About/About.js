import React from "react";
import { HeaderInstance as Header } from "components/0_Instances/HeaderInstance";
import { Box } from "components/atoms/Box/Box";
import { Text } from "components/atoms/Text/Text";
import { PersonItem } from "components/molecules/TeamIntro/PersonItem/PersonItem";
import StandardPage from "components/templates/StandardPage";
import profileProps from "constants/textConsts/about";
import { useRecoilValue } from "recoil";
import { languageState } from "recoil/atoms";
import "./About.css";

export const AboutTeam = () => {
  const language = useRecoilValue(languageState);

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
              {profileProps(language).explanation[0]}
            </Text>
            <Text
              className="body centered"
              style={{ marginTop: "35px", lineHeight: "25px" }}
            >
              {profileProps(language).explanation[1]}
            </Text>
          </Box>
          <Box className="about-section">
            <Box className="about-banner funfac-styled gotham">
              <Text>Team</Text>
            </Box>
            <Box className="profile-container">
              {profileProps(language).profiles.map(
                ({ name, imageSrc, job }, index) => {
                  return (
                    <PersonItem
                      name={name}
                      imageSrc={imageSrc}
                      job={job}
                      key={index}
                    />
                  );
                }
              )}
            </Box>
          </Box>
        </Box>
      }
    />
  );
};

export default AboutTeam;
