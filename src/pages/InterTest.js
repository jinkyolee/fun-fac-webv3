import React, { useState } from "react";
import { HeaderInstance as Header } from "components/0_Instances/HeaderInstance";
import StandardPage from "components/templates/StandardPage";
import Pending from "components/organisms/InterTest/Pending";
import InProgress from "components/organisms/InterTest/InProgress";
import Result from "components/organisms/InterTest/Result";

export const InteractiveTest = () => {
  const [testState, setTestState] = useState("pending");
  const [score, setScore] = useState();

  const setResult = (score) => {
    setScore(score);
    setTestState("finished");
  };

  return (
    <StandardPage
      className="centered"
      header={<Header />}
      body={
        {
          pending: <Pending setTestState={setTestState} />,
          started: <InProgress setResult={setResult} />,
          finished: <Result score={score} />,
        }[testState]
      }
    />
  );
};

export default InteractiveTest;
