import React from "react";
import { HeaderInstance as Header } from "../../components/0_Instances/HeaderInstance";
import Box from "../../components/atoms/Box/Box";
import Text from "../../components/atoms/Text/Text";
import ChapterContainer from "../../components/molecules/Story/Chapter/ChapterContainer";
import StandardPage from "../../components/templates/StandardPage";
import Chapter from "../../components/molecules/Story/Chapter/Chapter";
import { chapterImage } from "../../images/0_images";

export const StoryMain = () => {
  return (
    <StandardPage
      className="centered"
      header={<Header />}
      body={
        <Box
          className="vertical-flex align-center"
          style={{ marginTop: "100px" }}
        >
          <Box
            className="vertical-flex align-center"
            style={{ width: "650px" }}
          >
            <Text className="heading bold story">악야</Text>
            <Text className="body centered story" style={{ marginTop: "25px" }}>
              소설에 대해서 설명하는 짧은 글이 들어갈 거. 대체 텍스트 검은 어둠
              속에서 깨어나 복수의 밤을 꿈꾸나니…… 모든 것을 잃고 세상에서
              지워졌던 존재, 휘경. 10년 만에 돌아온 강호에서 그의
              <br />
              복수행이 시작된다.
            </Text>
          </Box>
          <ChapterContainer
            chapters={
              <>
                <Chapter imgSrc={chapterImage} chapter="1" />
                <Chapter imgSrc={chapterImage} chapter="2" />
                <Chapter imgSrc={chapterImage} chapter="3" />
                <Chapter imgSrc={chapterImage} chapter="4" />
                <Chapter imgSrc={chapterImage} chapter="5" />
              </>
            }
          />
        </Box>
      }
    />
  );
};

export default StoryMain;
