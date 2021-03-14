const setButtonColor = ({ target: { id } }) => {
  const list = document.getElementsByClassName("list-display-btn")[0]
    .firstChild;
  const grid = document.getElementById("grid");

  console.log(list);
  console.log(grid);

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
