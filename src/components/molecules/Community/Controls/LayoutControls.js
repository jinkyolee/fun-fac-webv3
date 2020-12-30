import React, { useEffect } from "react";
import GridIcon from "assets/svg/Community/GridIcon";
import ListIcon from "assets/svg/Community/ListIcon";
import initButtonColor from "functions/local/Community/initButtonColor";
import setButtonColor from "functions/local/Community/setButtonColor";
import Box from "components/atoms/Box/Box";
import Button from "components/atoms/Button/Button";
import "./LayoutControls.css";

export const LayoutControls = ({ displayState, setDisplayState }) => {
  useEffect(() => {
    initButtonColor(displayState);
  }, [displayState]);

  return (
    <Box className="layout-cntrl">
      <Box className="input-to-be-made" />
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
