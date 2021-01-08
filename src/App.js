import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutTeam from "pages/About";
import GameIntroduction from "pages/GameIntro";
import Home from "pages/Home";
import InteractiveTest from "pages/InterTest";
import StoryMain from "pages/Story/StoryMain";
import StoryBook from "pages/Story/StoryBook";
import TimelinePage from "pages/TimelinePage";
import PersonPage from "pages/Person";
import CommunityPage from "pages/Community/CommunityPage";
import { useRecoilState, useSetRecoilState } from "recoil";
import { languageState, loginState } from "recoil/atoms";
import LoginPage from "pages/Auth/LoginPage";
import SignupPage from "pages/Auth/SignupPage";
import { authService } from "fbaseInst/fbase";
import WritePage from "pages/Community/WritePage";
// import RedirectBack from "components/atoms/Redirect/Redirect";

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
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/game" component={GameIntroduction} />
        <Route path="/team" component={AboutTeam} />
        <Route path="/test" component={InteractiveTest} />
        <Route path="/story" component={StoryMain} />
        <Route path="/story/chapter" component={StoryBook} />
        <Route path="/timeline" component={TimelinePage} />
        <Route path="/persons/sejong" component={PersonPage} />
        <Route path="/community" exact component={CommunityPage} />
        {loggedIn === true && (
          <Route path="/community/write" component={WritePage} />
        )}
        {loggedIn === false && (
          <>
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignupPage} />
          </>
        )}
        {/* <Redirect from="*">
          <RedirectBack />
        </Redirect> */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
