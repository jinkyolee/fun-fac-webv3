import React, { useState } from "react";
import { HeaderInstance as Header } from "../components/0_Instances/HeaderInstance";
import StandardPage from "../components/templates/StandardPage";
import Pending from "../components/organisms/InterTest/Pending";
import InProgress from "../components/organisms/InterTest/InProgress";
import Box from "../components/atoms/Box/Box";

export const InteractiveTest = () => {
  const [testState, setTestState] = useState("pending");
  const [score, setScore] = useState();

  // 컴포넌트를 따로 만들어서 oncomplete으로 받아서 제출하기 progress를 started component안에서 처리하기 => 결과도
  // useeffect 많이 쓰면 안 좋음

  return (
    <StandardPage
      className="centered"
      header={<Header />}
      body={
        {
          pending: <Pending setTestState={setTestState} />,
          started: (
            <InProgress setTestState={setTestState} setScore={setScore} />
          ),
          finished: (
            <React.Fragment>
              <Box className="centered" style={{ marginTop: "100px" }}>
                {`${JSON.stringify(score)}`}
              </Box>
            </React.Fragment>
          ),
        }[testState]
      }
    />
  );
};

export default InteractiveTest;
