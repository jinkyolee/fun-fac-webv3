import React, { useState } from "react";
import { HeaderInstance as Header } from "components/0_Instances/HeaderInstance";
import StandardPage from "components/templates/StandardPage";
import WritingControls from "components/molecules/Community/Controls/WritingControls";
import LayoutControls from "components/molecules/Community/Controls/LayoutControls";
import initDisplayState from "functions/local/Community/initDisplayState";
import CommunityDisplay from "components/organisms/Community/CommunityDisplay/CommunityDisplay";
// import CardedBlogItem from "components/molecules/Community/BlogItem/CardedBlogItem";
// import ListedBlogItem from "components/molecules/Community/BlogItem/ListedBlogItem";

export const CommunityPage = () => {
  const [display, setDisplay] = useState(initDisplayState());

  const data = [
    {
      title: "글 제목 하나",
      user: "작성자",
      flair: "palace",
      date: "20XX.OO.??",
      content:
        "Lorem ipsum dolor sit amet, sint malorum his eu, posse voluptua eu mel. Tantas tibique inciderint duo in, cum id elitr facilisis, has ut case adversarium. Usu erat dicant te. Veri autem timeam an has, nusquam perfecto invenire sea at. An ius solum adolescens reprehendunt.asodfj",
      id: 0,
    },
    {
      title: "글 제목 하나",
      user: "작성자",
      flair: "palace",
      date: "20XX.OO.??",
      content:
        "Lorem ipsum dolor sit amet, sint malorum his eu, posse voluptua eu mel. Tantas tibique inciderint duo in, cum id elitr facilisis, has ut case adversarium. Usu erat dicant te. Veri autem timeam an has, nusquam perfecto invenire sea at. An ius solum adolescens reprehendunt.asodfj",
      id: 1,
    },
    {
      title: "글 제목 하나",
      user: "작성자",
      flair: "game",
      date: "20XX.OO.??",
      content:
        "Lorem ipsum dolor sit amet, sint malorum his eu, posse voluptua eu mel. Tantas tibique inciderint duo in, cum id elitr facilisis, has ut case adversarium. Usu erat dicant te. Veri autem timeam an has, nusquam perfecto invenire sea at. An ius solum adolescens reprehendunt.asodfj",
      id: 2,
    },
    {
      title: "글 제목 하나",
      user: "작성자",
      flair: "palace",
      date: "20XX.OO.??",
      content:
        "Lorem ipsum dolor sit amet, sint malorum his eu, posse voluptua eu mel. Tantas tibique inciderint duo in, cum id elitr facilisis, has ut case adversarium. Usu erat dicant te. Veri autem timeam an has, nusquam perfecto invenire sea at. An ius solum adolescens reprehendunt.asodfj",
      id: 3,
    },
    {
      title: "글 제목 하나",
      user: "작성자",
      flair: "game",
      date: "20XX.OO.??",
      content:
        "Lorem ipsum dolor sit amet, sint malorum his eu, posse voluptua eu mel. Tantas tibique inciderint duo in, cum id elitr facilisis, has ut case adversarium. Usu erat dicant te. Veri autem timeam an has, nusquam perfecto invenire sea at. An ius solum adolescens reprehendunt.asodfj",
      id: 4,
    },
  ];

  const setDisplayState = (state) => {
    setDisplay(state);
    window.localStorage.removeItem("displayState");
    window.localStorage.setItem("displayState", state);
  };

  return (
    <StandardPage
      className="justify-center relative"
      header={<Header />}
      body={
        <>
          <WritingControls />
          <LayoutControls
            displayState={display}
            setDisplayState={setDisplayState}
          />
          <CommunityDisplay data={data} displayState={display} />
        </>
      }
      style={{ backgroundColor: "#F9F9F9" }}
    />
  );
};

export default CommunityPage;
