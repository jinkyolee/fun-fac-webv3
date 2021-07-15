import { firestoreService } from "fbaseInst/fbase";

const getPosts = async () => {
  const postsCollection = [];
  const posts = await firestoreService
    .collection("posts")
    .orderBy("timestamp", "desc")
    .limit(9)
    .get();
  posts.forEach((document) => {
    const post = {
      ...document.data(),
      id: document.id,
    };
    postsCollection.push(post);
  });
  return postsCollection;
};

export default getPosts;
