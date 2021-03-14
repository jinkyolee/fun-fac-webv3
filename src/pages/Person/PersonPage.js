import React from "react";
import { HeaderInstance as Header } from "components/0_Instances/HeaderInstance";
import Box from "components/atoms/Box/Box";
import StandardPage from "components/templates/StandardPage";
import { LinkedButton } from "components/atoms/Button/Button";
import Text from "components/atoms/Text/Text";
import { useRecoilValue } from "recoil";
import { deviceType, languageState } from "recoil/atoms";
import personsPageText from "constants/textConsts/personsPage";
import PersonHeader from "components/molecules/PersonPage/PersonHeader/PersonHeader";

export const PersonPage = () => {
  const language = useRecoilValue(languageState);
  const device = useRecoilValue(deviceType);
  const postID = new URLSearchParams(window.location.search).get("id");
  const post = personsPageText(language)[postID];

  if (post === undefined) {
    return (
      <StandardPage
        className="full centered"
        header={<Header />}
        body={<Text style={{ fontSize: "50px" }}>준비 중인 컨텐츠입니다</Text>}
      />
    );
  }

  return (
    <StandardPage
      className="fullW"
      header={<Header />}
      body={
        <Box className="vertical-flex fullW align-center">
          <PersonHeader
            title={post.heading.title}
            subtitle={post.heading.subtitle}
            device={device === "small" ? "mobile" : ""}
          />
          {device !== "small" && post.image}
          <Box
            className={`vertical-flex align-center ${
              device === "small" ? "mobile" : ""
            }`}
            style={
              device !== "small"
                ? {
                    width: "750px",
                    marginTop: "80px",
                  }
                : { width: "87.5%", marginTop: "1.25rem" }
            }
          >
            <Text
              style={
                device !== "small"
                  ? {
                      width: "100%",
                      fontWeight: "900",
                      fontSize: "23px",
                      lineHeight: "20px",
                    }
                  : {
                      width: "100%",
                      fontWeight: "900",
                      fontSize: "20px",
                      lineHeight: "25px",
                    }
              }
            >
              {post.subtitle}
            </Text>
            {post.body}
          </Box>
          <Text
            className="sub-body"
            style={
              device !== "small"
                ? {
                    marginTop: "45px",
                    marginBottom: "70px",
                    width: "750px",
                    fontSize: "16px",
                  }
                : { width: "90%", marginTop: "1rem", marginBottom: "1rem" }
            }
          >
            <b>{post.credits}</b>
          </Text>
          <LinkedButton
            to={"/persons"}
            className="return-to-persons"
            label="목록으로 돌아가기"
          />
        </Box>
      }
    />
  );
};

export default PersonPage;
