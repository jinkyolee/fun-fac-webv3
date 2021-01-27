import React from "react";
import { HeaderInstance as Header } from "components/0_Instances/HeaderInstance";
import StandardPage from "components/templates/StandardPage";
import PersonCollection from "components/organisms/Person/PersonCollection";
import Box from "components/atoms/Box/Box";
import personMainText from "constants/textConsts/personsMain";
import { useRecoilValue } from "recoil";
import { languageState } from "recoil/atoms";

export const PersonMain = () => {
  const language = useRecoilValue(languageState);
  const { labels, personStuff } = personMainText(language);
  console.log(labels);

  return (
    <StandardPage
      className="justify-center"
      header={<Header />}
      body={
        <Box className="vertical-flex" style={{ marginTop: "240px" }}>
          <PersonCollection
            personItems={personStuff.historical}
            label={labels[0]}
          />
          <PersonCollection
            personItems={personStuff.modern}
            label={labels[1]}
          />
        </Box>
      }
    />
  );
};

export default PersonMain;
