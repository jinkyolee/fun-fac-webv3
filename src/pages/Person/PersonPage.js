import React from "react";
import { HeaderInstance as Header } from "components/0_Instances/HeaderInstance";
import Box from "components/atoms/Box/Box";
import StandardPage from "components/templates/StandardPage";
import { LinkedButton } from "components/atoms/Button/Button";
import Text from "components/atoms/Text/Text";
import { useRecoilValue } from "recoil";
import { languageState } from "recoil/atoms";
import personsPageText from "constants/textConsts/personsPage";

export const PersonPage = () => {
  const language = useRecoilValue(languageState);
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
          {post.heading}
          {post.image}
          <Box
            className="vertical-flex align-center"
            style={{
              width: "750px",
              marginTop: "80px",
            }}
          >
            <Text
              style={{
                width: "100%",
                fontWeight: "900",
                fontSize: "23px",
                lineHeight: "20px",
              }}
            >
              {post.subtitle}
            </Text>
            {post.body}
          </Box>
          <Text
            className="sub-body"
            style={{
              marginTop: "45px",
              marginBottom: "70px",
              width: "750px",
              fontSize: "16px",
            }}
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
