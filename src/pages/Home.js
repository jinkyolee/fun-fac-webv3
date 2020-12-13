import React from "react";
import { FooterPage } from "../components/templates/FooterPage";
import { HeaderInstance as Header } from "../components/0_Instances/HeaderInstance";
import {
  logoImage,
  content1,
  content2,
  content3,
} from "../assets/images/0_images";
import { LinkedImage } from "../components/atoms/ImageComp/ImageComp";
import { ContentView } from "../components/molecules/ContentView/ContentView";
import { Text } from "../components/atoms/Text/Text";
import { Footer } from "../components/organisms/Footer/Footer";

export const Home = () => {
  return (
    <FooterPage
      header={<Header />}
      body={
        <React.Fragment>
          <ContentView
            imgSrc={content1}
            to="/content1"
            title="Content 1"
            description="This is a magazine about how the world ended"
          />
          <ContentView
            imgSrc={content2}
            to="/content2"
            title="Content 2"
            description="This is a magazine about how we revived"
          />
          <ContentView
            imgSrc={content3}
            to="/content3"
            title="Content 3"
            description="This is a magazine about how we live today
      asoi dfo asi jdfoijsa oiajsfo isjadofjas dof pjsaodi jfasoidjf sao idja odijfaosdifjsa odijfpa sodij dfsaois dj fasdio fja s difjas oifjoi j asdij of pdsiofj oidjfoon enmken wn aisdjfoij kemlk fmlke"
          />
        </React.Fragment>
      }
      footer={
        <Footer
          rows={[
            <Text type="body" text="문의 및 연락처 택스트" />,
            <LinkedImage src={logoImage} className="footer-image" />,
          ]}
        />
      }
    />
  );
};

export default Home;
