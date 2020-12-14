import React, { useState, useEffect } from "react";
import { ReactReader } from "react-reader";
import { HeaderInstance as Header } from "../../components/0_Instances/HeaderInstance";
import StandardPage from "../../components/templates/StandardPage";
import evilNight from "../../assets/evil-night.epub";
import "./StoryBook.css";

const localURL = evilNight;

export const StoryBook = () => {
  const [location, setLocation] = useState(
    new URLSearchParams(window.location.search).get("id")
  );

  const randFunc = setInterval(() => {
    let iframe = document.querySelector("iframe");
    const searchParams = ["프롤로그", "1장", "2장", "3장", "4장"];

    if (iframe) {
      let pTexts = iframe.contentWindow.document.querySelectorAll("p");

      console.log(pTexts);

      for (let i = 0; i < pTexts.length; i++) {
        if (searchParams.includes(pTexts[i].innerText)) {
          console.log(pTexts[i].classList[0]);
          pTexts[
            i
          ].style = `.${pTexts[i].classList[0]} { font-size: 14px !important; }`;
        } else if (pTexts[i].innerText === "악야") {
          pTexts[i].style = "font-size: 40px !important;";
        }
      }
      try {
        const style = document.createElement("style");
        style.textContent = `p { font-size: 13px !important; }`;
        iframe.contentDocument.head.appendChild(style);
        clearInterval(randFunc);
      } catch (err) {
        console.error(err);
      }
    }
  }, 10);

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
          />
        </div>
      }
    />
  );
};

export default StoryBook;
