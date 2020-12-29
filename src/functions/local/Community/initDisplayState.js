const initDisplayState = () => {
  const displayState = window.localStorage.getItem("displayState");
  if (displayState) {
    return displayState;
  } else {
    window.localStorage.setItem("displayState", "grid");
  }
};

export default initDisplayState;
