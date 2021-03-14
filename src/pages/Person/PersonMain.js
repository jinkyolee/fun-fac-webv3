import React from "react";
import { HeaderInstance as Header } from "components/0_Instances/HeaderInstance";
import StandardPage from "components/templates/StandardPage";
import PersonCollection from "components/organisms/Person/PersonCollection";
import Box from "components/atoms/Box/Box";
import personMainText from "constants/textConsts/personsMain";
import { useRecoilValue } from "recoil";
import { deviceType, languageState } from "recoil/atoms";
import PersonThumbnail, {
  PreparingThumbnail,
} from "components/molecules/PersonPage/PersonThumbnail/PersonThumbnail";

export const PersonMain = () => {
  const language = useRecoilValue(languageState);
  const device = useRecoilValue(deviceType);
  const { labels, personStuff } = personMainText(language);

  console.log(personStuff);

  const returnModern = () => {
    const data = personStuff.modern.map((data, index) => {
      const { src, title, subtitle, to } = data;
      if (!data.$$typeof) {
        return (
          <PersonThumbnail
            src={src}
            title={title}
            subtitle={subtitle}
            key={index}
            to={to}
            type={device === "small" ? "mobile" : ""}
          />
        );
      } else {
        return (
          <PreparingThumbnail
            key={2}
            type={device === "small" ? "mobile" : ""}
          />
        );
      }
    });
    return data;
  };

  const returnHistoric = () => {
    const data = personStuff.historical.map(
      ({ src, title, subtitle, to }, index) => {
        return (
          <PersonThumbnail
            src={src}
            title={title}
            subtitle={subtitle}
            key={index}
            to={to}
            type={device === "small" ? "mobile" : ""}
          />
        );
      }
    );
    return data;
  };

  return (
    <StandardPage
      className="justify-center"
      header={<Header />}
      body={
        <Box
          className="vertical-flex"
          style={
            device === "small" ? { marginTop: "6rem" } : { marginTop: "240px" }
          }
        >
          <PersonCollection
            personItems={returnHistoric()}
            label={labels[0]}
            device={device}
          />
          <PersonCollection
            personItems={returnModern()}
            label={labels[1]}
            device={device}
          />
        </Box>
      }
    />
  );
};

export default PersonMain;
