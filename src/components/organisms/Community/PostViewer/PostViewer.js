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
  const parsedContent = htmlParser.parseFromString(htmlContent, "text/html");
  const content = Object.values(parsedContent.body.children);

  console.log(parsedContent.body);

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
        {content.map(({ innerHTML }, index) => {
          console.log(innerHTML);
          let parsedHTML = htmlParser.parseFromString(innerHTML, "text/html")
              .body,
            returnContent;
          if (!parsedHTML.innerHTML) {
            returnContent = parsedContent.children[0].outerHTML;
          } else {
            returnContent = innerHTML;
          }
          return (
            <div
              key={index}
              dangerouslySetInnerHTML={{ __html: returnContent }}
            ></div>
          );
        })}
      </Box>
    </Box>
  );
};

export default PostViewer;
