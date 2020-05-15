import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RouteNames from "./constants/routes";

//SECTION Pages
import Login from "./Pages/Login/";
import Signup from "./Pages/Register/";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Update from "./Pages/Update";
import NavigationBar from "./Navigation/Naviagation";

class switcher extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar />

        <Router>
          <Switch>
            <Route path={RouteNames.home} component={Home} />
            <Route path={RouteNames.login} component={Login} />
            <Route path={RouteNames.register} component={Signup} />
            <Route path={RouteNames.profile} component={Profile} />
            <Route path={RouteNames.update} component={Update} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default switcher;
