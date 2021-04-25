const filterContentExp = (content, device) => {
  let filteredString;

  if (device !== "small") {
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
  } else {
    if (content.length > 4) {
      filteredString = content.slice(0, 5);
      console.log(filteredString);
    } else {
      filteredString = content;
    }

    filteredString = filteredString.join("∂");

    if (filteredString.length > 275) {
      filteredString = `${filteredString.slice(0, 100)}...`;
    }

    filteredString = filteredString.split("∂");

    return filteredString;
  }
};

export default filterContentExp;
