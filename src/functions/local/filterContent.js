const filterContent = (content) => {
  if (content.length > 275) {
    return content.slice(0, 275);
  } else {
    return content;
  }
};

export default filterContent;
