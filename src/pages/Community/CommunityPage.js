import React, { useState } from "react";
import { HeaderInstance as Header } from "components/0_Instances/HeaderInstance";
import StandardPage from "components/templates/StandardPage";
import WritingControls from "components/molecules/Community/Controls/WritingControls";
import LayoutControls from "components/molecules/Community/Controls/LayoutControls";
import initDisplayState from "functions/local/Community/initDisplayState";
import CommunityDisplay from "components/organisms/Community/CommunityDisplay/CommunityDisplay";
import { useRecoilValueLoadable } from "recoil";
import { postsCollection } from "recoil/atoms";

export const CommunityPage = () => {
  const [display, setDisplay] = useState(initDisplayState());
  const posts = useRecoilValueLoadable(postsCollection);

  const setDisplayState = (state) => {
    setDisplay(state);
    window.localStorage.removeItem("displayState");
    window.localStorage.setItem("displayState", state);
  };

  switch (posts.state) {
    case "hasValue":
      return (
        <StandardPage
          className="justify-center relative"
          header={<Header />}
          body={
            <>
              <WritingControls />
              <LayoutControls
                displayState={display}
                setDisplayState={setDisplayState}
              />
              <CommunityDisplay data={posts.contents} displayState={display} />
            </>
          }
          style={{ backgroundColor: "#F9F9F9" }}
        />
      );
    case "loading":
      return (
        <StandardPage
          className="justify-center relative"
          header={<Header />}
          body={
            <>
              <WritingControls />
              <LayoutControls
                displayState={display}
                setDisplayState={setDisplayState}
              />
              <span
                style={{
                  marginTop: "300px",
                  marginBottom: "1000px",
                  fontSize: "50px",
                }}
              >
                Loading...
              </span>
            </>
          }
          style={{ backgroundColor: "#F9F9F9" }}
        />
      );
    default:
      break;
  }
};

export default CommunityPage;
