import React, { useEffect, useState } from "react";
import GridIcon from "assets/svg/Community/GridIcon";
import ListIcon from "assets/svg/Community/ListIcon";
import initButtonColor from "functions/local/Community/initButtonColor";
import setButtonColor from "functions/local/Community/setButtonColor";
import Box from "components/atoms/Box/Box";
import Button from "components/atoms/Button/Button";
import "./LayoutControls.css";
import { Dropdown } from "components/atoms/Input/Input";
import { useRecoilValue } from "recoil";
import { languageState } from "recoil/atoms";

export const LayoutControls = ({
  displayState,
  setDisplayState,
  setDisplayContent,
  displayContent,
  filteredPosts = { palacePosts: [], gamePosts: [] },
}) => {
  const language = useRecoilValue(languageState);
  const [flairState, setFlair] = useState("default");
  const { palacePosts, gamePosts } = filteredPosts;

  const filterDisplayContent = () => {
    if (flairState === "palace") {
      return palacePosts;
    } else {
      return gamePosts;
    }
  };

  useEffect(() => {
    initButtonColor(displayState);
  }, [displayState]);

  return (
    <Box className="layout-cntrl">
      {flairState !== "" && (
        <Box
          className={`flair-circle ${flairState}`}
          style={{ marginRight: "10px" }}
        />
      )}
      <Dropdown
        name="tag-selecter"
        className="tag-selecter"
        defaultLabel={language ? "선택한 태그 없음" : "No tag selected"}
        value={flairState}
        onChange={(e) => {
          setFlair(e.target.value);
          setDisplayContent(filterDisplayContent());
          displayContent = filterDisplayContent();
        }}
        options={[
          { value: "palace", label: "Palace" },
          { value: "game", label: "Game" },
        ]}
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
