import React, { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutTeam from "pages/About/About";
import GameIntroduction from "pages/GameIntro";
import Home from "pages/Home";
import InteractiveTest from "pages/InterTest";
import TimelinePage from "pages/TimelinePage";
import PersonPage from "pages/Person/PersonPage";
import CommunityPage from "pages/Community/CommunityPage";
import { useRecoilState, useSetRecoilState } from "recoil";
import { languageState, loginState } from "recoil/atoms";
import LoginPage from "pages/Auth/LoginPage";
import { authService } from "fbaseInst/fbase";
import WritePage from "pages/Community/WritePage";
import ViewPostPage from "pages/Community/ViewPostPage";
import PersonMain from "pages/Person/PersonMain";
import Loading from "pages/Loading";

const App = () => {
  const setLanguageState = useSetRecoilState(languageState);
  const [loggedIn, setLoginState] = useRecoilState(loginState);

  const initSettings = () => {
    const languageSetting = window.localStorage.getItem("languageSetting");
    const loginState = window.localStorage.getItem("loginState");

    if (!languageSetting) {
      window.localStorage.setItem("languageSetting", "kr");
    } else {
      setLanguageState(languageSetting);
    }

    if (!loginState) {
      window.localStorage.setItem("loginState", false);
    } else {
      setLoginState(loginState);
    }
  };

  useEffect(() => {
    initSettings();
    authService.onAuthStateChanged((user) => {
      if (user) {
        setLoginState(true);
        window.localStorage.setItem("loginState", true);
      } else {
        setLoginState(false);
        window.localStorage.setItem("loginState", false);
      }
    });
    // eslint-disable-next-line
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/game" component={GameIntroduction} />
        <Route exact path="/team" component={AboutTeam} />
        <Route exact path="/test" component={InteractiveTest} />
        <Route exact path="/timeline" component={TimelinePage} />
        <Route exact path="/persons" component={PersonMain} />
        <Route exact path="/persons/post" component={PersonPage} />
        <Route path="/community/post" component={ViewPostPage} />
        {loggedIn === true && (
          <Route  path="/community/write" component={WritePage} />
        )}
        {loggedIn === false && <Route path="/login" component={LoginPage} />}
        <Suspense fallback={<Loading />}>
          <Route path="/community" exact component={CommunityPage} />
        </Suspense>
      </Switch>
    </Router>
  );
};

export default App;
