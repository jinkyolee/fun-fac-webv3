const getDeviceWidth = () => {
  const deviceWidth = document.documentElement.clientWidth;
  let deviceType;

  if (deviceWidth > 1100) {
    deviceType = "large";
  } else if (deviceWidth < 1100 && deviceWidth > 750) {
    deviceType = "medium";
  } else if (deviceWidth < 750) {
    deviceType = "small";
  }

  return deviceType;
};

export default getDeviceWidth;
