const initButtonColor = (displayState) => {
  const list = document.getElementById("list");
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
