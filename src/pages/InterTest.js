import React, { useState } from "react";
import { HeaderInstance as Header } from "components/0_Instances/HeaderInstance";
import StandardPage from "components/templates/StandardPage";
import Pending from "components/organisms/InterTest/Pending";
import InProgress from "components/organisms/InterTest/InProgress";
import Result from "components/organisms/InterTest/Result";
import { useRecoilValue } from "recoil";
import { languageState } from "recoil/atoms";

export const InteractiveTest = () => {
  const language = useRecoilValue(languageState);
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
          pending: <Pending setTestState={setTestState} language={language} />,
          started: <InProgress setResult={setResult} language={language} />,
          finished: <Result score={score} language={language} />,
        }[testState]
      }
    />
  );
};

export default InteractiveTest;
