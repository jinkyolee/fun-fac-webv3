import { firestoreService } from "fbaseInst/fbase";

const getPostWithID = async (id) => {
  const post = await firestoreService.collection("posts").doc(id).get();
  const postData = post.data();

  return postData;
};

export default getPostWithID;
