import React, { useEffect, useState } from "react";
import { HeaderInstance as Header } from "components/0_Instances/HeaderInstance";
import StandardPage from "components/templates/StandardPage";
import WritingControls from "components/molecules/Community/Controls/WritingControls";
import LayoutControls from "components/molecules/Community/Controls/LayoutControls";
import initDisplayState from "functions/local/Community/initDisplayState";
import CommunityDisplay from "components/organisms/Community/CommunityDisplay/CommunityDisplay";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import { postsCollection } from "recoil/atoms";
import { filteredPosts } from "recoil/selectors";

export const CommunityPage = () => {
  const [display, setDisplay] = useState(initDisplayState());
  const [loaded, setLoadingState] = useState(false);
  const posts = useRecoilValueLoadable(postsCollection);
  const fPosts = useRecoilValueLoadable(filteredPosts);
  const [displayContent, setDisplayContent] = useState();

  const setDisplayState = (state) => {
    setDisplay(state);
    window.localStorage.removeItem("displayState");
    window.localStorage.setItem("displayState", state);
  };

  if (posts.state === "hasValue" && fPosts.state === "hasValue") {
    let content = posts.contents;
    const filteredContent = fPosts.contents;
    setDisplayContent(content);
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
              filteredPosts={filteredContent}
              displayContent={displayContent}
            />
            <CommunityDisplay data={displayContent} displayState={display} />
          </>
        }
        style={{ backgroundColor: "#F9F9F9", marginTop: "70px" }}
      />
    );
  } else if (posts.state === "loading" || fPosts.state === "loading") {
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
        style={{ backgroundColor: "#F9F9F9", marginTop: "70px" }}
      />
    );
  }
};

export default CommunityPage;
