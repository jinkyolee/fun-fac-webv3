import React, { useState } from "react";
import { HeaderInstance as Header } from "../components/0_Instances/HeaderInstance";
import StandardPage from "../components/templates/StandardPage";
import CardedBlogItem from "../components/molecules/Community/BlogItem/CardedBlogItem";

export const CommunityPage = () => {
  const [displayState, seDisplayState] = useState(0);

  return (
    <StandardPage
      className="justify-center"
      header={<Header />}
      body={
        <>
          <CardedBlogItem
            title="글 제목 하나"
            user="작성자"
            flair="game"
            content="Lorem ipsum dolor sit amet, sint malorum his eu, posse voluptua eu mel. Tantas tibique inciderint duo in, cum id elitr facilisis, has ut case adversarium. Usu erat dicant te. Veri autem timeam an has, nusquam perfecto invenire sea at. An ius solum adolescens reprehendunt.asodfj"
            date="20XX.OO.??"
          />
          <CardedBlogItem
            title="글 제목 하나"
            user="작성자"
            flair="palace"
            content="Lorem ipsum dolor sit amet, sint malorum his eu, posse voluptua eu mel. Tantas tibique inciderint duo in, cum id elitr facilisis, has ut case adversarium. Usu erat dicant te. Veri autem timeam an has, nusquam perfecto invenire sea at. An ius solum adolescens reprehendunt.asodfj"
            date="20XX.OO.??"
          />
        </>
      }
    />
  );
};

export default CommunityPage;
