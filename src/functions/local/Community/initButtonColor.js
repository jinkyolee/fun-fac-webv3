const initButtonColor = (displayState) => {
  const list = document.getElementsByClassName("list-display-btn")[0]
    .firstChild;
  const grid = document.getElementById("grid");

  if (displayState === "grid") {
    grid.firstChild.style.fill = "#00249C";
    grid.firstChild.style.fillOpacity = "0.7";
  } else {
    list.firstChild.style.fill = "#00249C";
    list.firstChild.style.fillOpacity = "0.7";
  }
};

export default initButtonColor;
