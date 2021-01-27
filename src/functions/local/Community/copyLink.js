const copyLink = () => {
  const input = document.createElement("input"),
    link = window.location.href;

  document.body.appendChild(input);
  input.value = link;
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
};

export default copyLink;
