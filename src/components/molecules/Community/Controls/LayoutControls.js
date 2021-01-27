import React, { useEffect, useRef, useState } from "react";
import GridIcon from "assets/svg/Community/GridIcon";
import ListIcon from "assets/svg/Community/ListIcon";
import initButtonColor from "functions/local/Community/initButtonColor";
import setButtonColor from "functions/local/Community/setButtonColor";
import Box from "components/atoms/Box/Box";
import Button from "components/atoms/Button/Button";
import "./LayoutControls.css";
import { Dropdown } from "components/atoms/Input/Input";
import { useRecoilValue } from "recoil";
import { languageState, postsCollection } from "recoil/atoms";
import { filteredPosts } from "recoil/selectors";

export const LayoutControls = ({
  displayState,
  setDisplayState,
  setDisplayContent,
}) => {
  const posts = useRecoilValue(postsCollection);
  const fPosts = useRecoilValue(filteredPosts);
  const language = useRecoilValue(languageState);
  const flairState = useRef("default");
  const { palacePosts, gamePosts } = fPosts;

  const filterDisplayContent = () => {
    console.log(flairState.current);
    if (flairState.current === "palace") {
      return palacePosts;
    } else if (flairState.current === "game") {
      return gamePosts;
    } else if (flairState.current === "default") {
      return posts;
    }
  };

  useEffect(() => {
    initButtonColor(displayState);
  }, [displayState]);

  return (
    <Box className="layout-cntrl">
      {flairState.current !== "default" && (
        <Box
          className={`flair-circle ${flairState.current}`}
          style={{ marginRight: "10px" }}
        />
      )}
      <Dropdown
        name="tag-selecter"
        className="tag-selecter"
        defaultLabel={language === "kr" ? "모든 태그" : "All"}
        value={flairState.current}
        onChange={(e) => {
          flairState.current = e.target.value;
          setDisplayContent(filterDisplayContent());
        }}
        options={
          language === "kr"
            ? [
                { value: "palace", label: "고궁" },
                { value: "game", label: "게임" },
              ]
            : [
                { value: "palace", label: "Palace" },
                { value: "game", label: "Game" },
              ]
        }
      />
      <Button
        className="list-display-btn"
        label={<ListIcon />}
        onClick={(e) => {
          setButtonColor(e);
          setDisplayState("listed");
        }}
      />
      <Button
        className="card-display-btn"
        label={<GridIcon />}
        onClick={(e) => {
          setButtonColor(e);
          setDisplayState("grid");
        }}
      />
    </Box>
  );
};

export default LayoutControls;
