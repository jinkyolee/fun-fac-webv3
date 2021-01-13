import React from "react";
import { HeaderInstance as Header } from "components/0_Instances/HeaderInstance";
import StandardPage from "components/templates/StandardPage";
import ContentView from "components/molecules/Home/ContentView/ContentView";
import { personsHomeImg, testHomeImg } from "assets/images/Home/0_homeImgExp";
import Slider from "components/organisms/Slider/Slider";

export const Home = () => {
  return (
    <StandardPage
      className="full"
      header={<Header />}
      body={
        <Slider
          slides={[
            <ContentView
              src={testHomeImg}
              to="/test"
              title="궁 추천 테스트"
              description={
                <>
                  각기 다른 매력과 분위기의 조선 5대궁 중<br />
                  나와 찰떡인 궁을 알아보세요.
                </>
              }
              label="테스트 하러가기"
            />,
            <ContentView
              src={personsHomeImg}
              to="/persons"
              title="인물포커스"
              description={
                <>
                  궁의 옛 주인들 그리고 오늘날
                  <br />
                  궁을 이야기하는 사람들을 만나보세요.
                </>
              }
              label="테스트 하러가기"
            />,
          ]}
          pagination={true}
          navigation={false}
          style={{
            width: "100%",
            height: "height: calc(100% - 70px)",
            marginTop: "70px",
          }}
        />
      }
    />
  );
};

export default Home;
