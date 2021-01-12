import React from "react";
import { HeaderInstance as Header } from "components/0_Instances/HeaderInstance";
import { Box } from "components/atoms/Box/Box";
import { Image } from "components/atoms/Image/Image";
import { Text } from "components/atoms/Text/Text";
import { PersonItem } from "components/molecules/TeamIntro/PersonItem/PersonItem";
import StandardPage from "components/templates/StandardPage";
import teamLogo from "assets/images/Team/team-logo.png";
import profileProps from "constants/profile";

export const AboutTeam = () => {
  return (
    <StandardPage
      className="centered"
      header={<Header />}
      body={
        <Box className="vertical-flex" style={{ marginTop: "100px" }}>
          <Box className="about-banner funfac-styled gotham">About</Box>
        </Box>
      }
    />
  );
};

export default AboutTeam;
