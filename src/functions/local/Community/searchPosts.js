const checkArrayForString = (array, string) => {
  let i = 0;

  for (const item of array) {
    if (item.includes(string)) {
      i += 1;
    }
  }

  if (i !== 0) {
    return true;
  } else {
    return false;
  }
};

export const searchPosts = (posts, search) => {
  let resultPosts = [];
  const searchTerm = search.toLowerCase();

  posts.forEach((post) => {
    let { content, title } = post;
    title = title.toLowerCase();
    content = content.map((string) => string.toLowerCase());

    if (title.includes(searchTerm)) {
      resultPosts.push(post);
    } else if (checkArrayForString(content, searchTerm)) {
      resultPosts.push(post);
    }
  });

  return resultPosts;
};
