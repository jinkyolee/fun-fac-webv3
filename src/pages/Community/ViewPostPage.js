import React, { useEffect, useState } from "react";
import { HeaderInstance as Header } from "components/0_Instances/HeaderInstance";
import StandardPage from "components/templates/StandardPage";
import getPostWithID from "functions/local/Community/getPostWithID";
import PostViewer from "components/organisms/Community/PostViewer/PostViewer";

export const ViewPostPage = () => {
  const [post, setPost] = useState();
  const [loading, setLoadState] = useState(true);
  const idNum = new URLSearchParams(window.location.search).get("id");

  useEffect(() => {
    getPostWithID(idNum)
      .then((postData) => setPost(postData))
      .then(() => setLoadState(false));
    // eslint-disable-next-line
  }, []);

  return (
    <StandardPage
      className="centered"
      header={<Header />}
      body={
        loading ? (
          <span
            style={{
              marginTop: "300px",
              marginBottom: "1000px",
              fontSize: "50px",
            }}
          >
            Loading...
          </span>
        ) : (
          <PostViewer post={post} />
        )
      }
    />
  );
};

export default ViewPostPage;
