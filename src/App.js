import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { GameIntroduction } from "./pages/GameIntro";
import { Home } from "./pages/Home";

// components that will go into individual pages

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/game" exact component={GameIntroduction} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
