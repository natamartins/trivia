import React from "react";

import { Router, Switch, Route } from "react-router-dom";

import { createBrowserHistory } from "history";

import Home from "./Home/Home";
import Quiz from "./components/Quizz.jsx";

const history = createBrowserHistory();

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/quiz" component={Quiz} />
      </Switch>
    </Router>
  );
};

export default Routes;
