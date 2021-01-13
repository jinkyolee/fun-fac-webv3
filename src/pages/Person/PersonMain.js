import React from "react";
import { HeaderInstance as Header } from "components/0_Instances/HeaderInstance";
import StandardPage from "components/templates/StandardPage";
import PersonCollection from "components/organisms/Person/PersonCollection";
import personCollection from "constants/personData";
import Box from "components/atoms/Box/Box";

export const PersonMain = () => {
  return (
    <StandardPage
      className="justify-center"
      header={<Header />}
      body={
        <Box className="vertical-flex" style={{ marginTop: "240px" }}>
          <PersonCollection
            personItems={personCollection.historical}
            label="궁의 옛 주인들 이야기"
          />
          <PersonCollection
            personItems={personCollection.modern}
            label={
              <>
                오늘날
                <br />
                궁을 이야기하는 사람들
              </>
            }
          />
        </Box>
      }
    />
  );
};

export default PersonMain;
