import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { RecoilRoot } from "recoil";
import AboutTeam from "./pages/About";
import GameIntroduction from "./pages/GameIntro";
import Home from "./pages/Home";
import InteractiveTest from "./pages/InterTest";
import StoryMain from "./pages/Story/StoryMain";
import StoryBook from "./pages/Story/StoryBook";
import TimelinePage from "./pages/TimelinePage";
import PersonPage from "./pages/Person";
import CommunityPage from "./pages/CommunityPage";
// import { useRecoilValue } from "recoil";
// import { languageState } from "./recoil/atoms";

function App() {
  // const language = useRecoilValue(languageState);

  // document.getElementsByTagName("body").fontFamily

  return (
    <RecoilRoot>
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
        </Switch>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
