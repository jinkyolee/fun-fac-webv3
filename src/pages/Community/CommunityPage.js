import React, { useState } from "react";
import { HeaderInstance as Header } from "components/0_Instances/HeaderInstance";
import StandardPage from "components/templates/StandardPage";
import WritingControls from "components/molecules/Community/Controls/WritingControls";
import LayoutControls from "components/molecules/Community/Controls/LayoutControls";
import initDisplayState from "functions/local/Community/initDisplayState";
import CommunityDisplay from "components/organisms/Community/CommunityDisplay/CommunityDisplay";
import { useRecoilValue } from "recoil";
import { postsCollection } from "recoil/atoms";

export const CommunityPage = () => {
  const posts = useRecoilValue(postsCollection);
  const [display, setDisplay] = useState(initDisplayState());
  const [displayContent, setDisplayContent] = useState(posts);

  const setDisplayState = (state) => {
    setDisplay(state);
    window.localStorage.removeItem("displayState");
    window.localStorage.setItem("displayState", state);
  };

  return (
    <StandardPage
      className="justify-center relative"
      header={<Header />}
      body={
        <>
          <WritingControls setDisplayContent={setDisplayContent} />
          <LayoutControls
            displayState={display}
            setDisplayState={setDisplayState}
            setDisplayContent={setDisplayContent}
          />
          <CommunityDisplay data={displayContent} displayState={display} />
        </>
      }
      style={{ backgroundColor: "#F9F9F9", marginTop: "70px" }}
    />
  );
};

export default CommunityPage;
