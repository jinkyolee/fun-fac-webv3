const filterUsername = (username) => {
  const slicedUsername = username.split("@");
  return slicedUsername[0];
};

export default filterUsername;
