import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AboutTeam } from "./pages/About";
import { GameIntroduction } from "./pages/GameIntro";
import { Home } from "./pages/Home";
import InteractiveTest from "./pages/InterTest";

// components that will go into individual pages

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/game" exact component={GameIntroduction} />
        <Route path="/team" component={AboutTeam} />
        <Route path="/test" component={InteractiveTest} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
