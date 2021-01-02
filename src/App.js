import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutTeam from "pages/About";
import GameIntroduction from "pages/GameIntro";
import Home from "pages/Home";
import InteractiveTest from "pages/InterTest";
import StoryMain from "pages/Story/StoryMain";
import StoryBook from "pages/Story/StoryBook";
import TimelinePage from "pages/TimelinePage";
import PersonPage from "pages/Person";
import CommunityPage from "pages/CommunityPage";
// import { useSetRecoilState, useRecoilState, useRecoilValue } from "recoil";
// import { languageState } from "recoil/atoms";
import LoginPage from "pages/Auth/LoginPage";
import SignupPage from "pages/Auth/SignupPage";

const initLanguage = (setLanguage) => {
  const languageSetting = window.localStorage.getItem("languageSetting");

  if (!languageSetting) {
    window.localStorage.setItem("languageSetting", "kr");
  } else {
    setLanguage(languageSetting);
  }
};

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/game" exact component={GameIntroduction} />
        <Route path="/team" component={AboutTeam} />
        <Route path="/test" component={InteractiveTest} />
        <Route path="/story" exact component={StoryMain} />
        <Route path="/story/chapter" component={StoryBook} />
        <Route path="/timeline" component={TimelinePage} />
        <Route path="/persons/sejong" component={PersonPage} />
        <Route path="/community" component={CommunityPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
