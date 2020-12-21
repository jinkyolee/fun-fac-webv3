import React, { useState } from "react";
import { ReactReader } from "react-reader";
import { HeaderInstance as Header } from "../../components/0_Instances/HeaderInstance";
import StandardPage from "../../components/templates/StandardPage";
import evilNight from "../../assets/evil-night.epub";

const localURL = evilNight;

export const StoryBook = () => {
  const [location, setLocation] = useState(
    new URLSearchParams(window.location.search).get("id")
  );

  return (
    <StandardPage
      className="centered full"
      header={<Header />}
      body={
        <div
          style={{
            position: "relative",
            height: "calc(100% - 50px)",
            width: "100%",
            marginTop: "50px",
          }}
        >
          <ReactReader
            url={localURL}
            title="악야"
            location={location}
            locationChanged={(epubcifi) => setLocation(epubcifi)}
            tocChanged={(e) => console.log(e)}
          />
        </div>
      }
    />
  );
};

export default StoryBook;
