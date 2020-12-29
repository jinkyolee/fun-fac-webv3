const setButtonColor = ({ target: { id } }) => {
  const list = document.getElementById("list");
  const grid = document.getElementById("grid");

  if (id === "grid") {
    grid.firstChild.style.fill = "#00249C";
    grid.firstChild.style.fillOpacity = "0.7";
    list.firstChild.style.fill = "black";
    list.firstChild.style.fillOpacity = "0.5";
  } else {
    list.firstChild.style.fill = "#00249C";
    list.firstChild.style.fillOpacity = "0.7";
    grid.firstChild.style.fill = "black";
    grid.firstChild.style.fillOpacity = "0.5";
  }
};

export default setButtonColor;
