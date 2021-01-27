import React from "react";
import Box from "components/atoms/Box/Box";
import Text from "components/atoms/Text/Text";
import Line from "components/atoms/Line/Line";
import filterUsername from "functions/local/Community/filterUsername";
import "./PostViewer.css";

export const PostViewer = ({ post }) => {
  const { htmlContent, title, user, postDate } = post;
  const filteredUser = filterUsername(user);
  const htmlParser = new DOMParser();
  const parsedContent = htmlParser.parseFromString(htmlContent, "text/html")
    .body;
  const content = Object.values(parsedContent.childNodes);

  console.log(content);

  return (
    <Box className="post-container" style={{ marginTop: "150px" }}>
      <Box className="header-container">
        <Text className="post-title">{title}</Text>
        <Box className="horizontal-flex align-center">
          <Text className="post-user">{filteredUser}</Text>
          <Line className="vertical date-divider" />
          <Text className="post-date">{postDate}</Text>
        </Box>
      </Box>
      <Line className="post-divider" />
      <Box className="post-body">
        {content.map((element, index) => {
          let returnContent;
          if (element.innerHTML) {
            returnContent = element.innerHTML;
            return (
              <div
                key={index}
                dangerouslySetInnerHTML={{ __html: returnContent }}
              ></div>
            );
          } else {
            if (element.data) {
              returnContent = element.data;
              return <div key={index}>{returnContent}</div>;
            } else {
              return (
                <div
                  key={index}
                  dangerouslySetInnerHTML={{ __html: element.outerHTML }}
                ></div>
              );
            }
          }
        })}
      </Box>
    </Box>
  );
};

export default PostViewer;
