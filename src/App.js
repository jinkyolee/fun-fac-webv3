import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutTeam from "./pages/About";
import GameIntroduction from "./pages/GameIntro";
import Home from "./pages/Home";
import InteractiveTest from "./pages/InterTest";
import StoryMain from "./pages/Story/StoryMain";
import StoryBook from "./pages/Story/StoryBook";
import TimelinePage from "./pages/TimelinePage";
import PersonPage from "./pages/Person";

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
      </Switch>
    </BrowserRouter>
  );
}

export default App;
