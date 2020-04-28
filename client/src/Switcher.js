import React from 'react';
import {BrowserRouter as Router, Switch, Route ,Redirect} from "react-router-dom";
import RouteNames from "./constants/routes";

//SECTION Pages
import Login from "./Pages/Login/";
import Signup from "./Pages/Signup/";
import Feed from "./Pages/Feed";
import Home from "./Pages/Home";
import Profile from './Pages/Profile';
import Update from './Pages/Update';

const switcher = (props) => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path={RouteNames.home} component={Home}/>
          <Route path={RouteNames.login} component = {Login}/>
          <Route path={RouteNames.register} component={Signup}/>
          <Route path={RouteNames.feed} component={Feed}/>
          <Route path={RouteNames.profile} component={Profile}/>
          <Route path={RouteNames.update} component={Update}/>
          <Route path={RouteNames.base}>
              <Redirect to={RouteNames.home} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default switcher;
