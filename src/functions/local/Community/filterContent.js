const filterContentExp = (content) => {
  let filteredString;

  if (content.length > 8) {
    filteredString = content.slice(0, 9);
    console.log(filteredString);
  } else {
    filteredString = content;
  }

  filteredString = filteredString.join("∂");

  if (filteredString.length > 275) {
    filteredString = `${filteredString.slice(0, 225)}...`;
  }

  filteredString = filteredString.split("∂");

  return filteredString;
};

export default filterContentExp;
