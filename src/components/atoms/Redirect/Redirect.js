import React from "react";
import { useHistory } from "react-router-dom";

export const RedirectBack = () => {
  useHistory().goBack();
  window.alert("접근이 불가능한 경로입니다");

  return <React.Fragment />;
};

export default RedirectBack;
