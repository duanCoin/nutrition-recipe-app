import React from "react";
import {render} from "react-dom";
import {browserHistory, Router, Route} from 'react-router'
import App from "./components/App";
import Recipe from "./components/Recipe";

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
      <Route path='/recipe'>
        <Route path=":id" component={Recipe}/>
      </Route>
  </Router>
  , document.getElementById("app"));
