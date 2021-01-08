import { firestoreService } from "fbaseInst/fbase";

const getPosts = async () => {
  const postsCollection = [];
  const posts = await firestoreService.collection("posts").get();
  posts.forEach((document) => {
    const post = {
      ...document.data(),
      id: document.id,
    };
    postsCollection.push(post);
  });
  console.log(postsCollection);
  return postsCollection;
};

export default getPosts;
