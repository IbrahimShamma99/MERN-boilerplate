import React from "react";
import "./home.scss";
import { Redirect } from "react-router-dom";
import RouteNames from "../../constants/routes";
import Intro from "./Components/Intro";
import Aux from "../../hoc";
import Footer from "./Components/Footer/";

export default class Home extends React.Component {
  state = {
    Loginredirect: false,
    Registerredirect: false,
  };

  Registerredirect = () => {
    this.setState({
      Registerredirect: true,
    });
  };

  Loginredirect = () => {
    this.setState({
      Loginredirect: true,
    });
  };

  renderRedirect = () => {
    if (this.state.Registerredirect) {
      return <Redirect to={RouteNames.register} />;
    }
    if (this.state.Loginredirect) {
      return <Redirect to={RouteNames.login} />;
    }
  };

  render() {
    return (
      <Aux className="container">
        <div className="col">
          <div className="row">
            <Intro
              Registerredirect={this.Registerredirect}
              Loginredirect={this.Loginredirect}
              renderRedirect={this.renderRedirect}
            />{" "}
          </div>{" "}
        </div>{" "}
        <Footer />
      </Aux>
    );
  }
}
