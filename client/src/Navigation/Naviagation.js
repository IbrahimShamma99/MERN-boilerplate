//FIXME

import React from "react";
//import "./Navigation.css";
import RouteNames from "../USER/constants/user.routes";
import auth from "../USER/Utils/auth-helper";
import * as actionTypes from "../USER/Store/user.actions";
import { connect } from "react-redux";

//SECTION importing bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
// import FormControl from "react-bootstrap/FormControl";
import styled from "styled-components";

const H4 = styled.h4`
  font-family: "Times New Roman", Times, serif;
`;
const H5 = styled.h5`
  font-family: "Times New Roman", Times, serif;
`;

const mapStatetoProps = (state) => {
  return {
    username: state.user.user.username,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    refresh: () => dispatch({ type: actionTypes.REFRESH }),
  };
};

class naviagtionBar extends React.Component {
  componentDidMount() {
    this.props.refresh();
  }

  render() {
    console.log("Username from nav=", this.props.username);
    return (
      <div className="navbar">
        <Navbar fixed="top" className="input" bg="black" expand="lg">
          <Navbar.Brand href={RouteNames.base}>
            <H4>App</H4>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {!auth.isAuthenticated() ? (
                <Nav.Link href={RouteNames.register}>
                  <Button variant="inherit">
                    <H5>Register</H5>
                  </Button>
                </Nav.Link>
              ) : null}
              {!auth.isAuthenticated() ? (
                <Nav.Link href={RouteNames.login}>
                  <Button variant="inherit">
                    <H5>Login</H5>
                  </Button>
                </Nav.Link>
              ) : null}
              {auth.isAuthenticated() ? (
                <Nav.Link href={RouteNames.logout}>
                  <Button
                    variant="inherit"
                    onClick={() => {
                      auth.signout();
                    }}
                  >
                    <H5>Logout</H5>
                  </Button>
                </Nav.Link>
              ) : null}
              {auth.isAuthenticated() ? (
                <Nav.Link href={"/" + this.props.username}>
                  <Button variant="inherit">
                    <H5>Profile</H5>
                  </Button>
                </Nav.Link>
              ) : null}
              {/*        
          <NavDropdown title="Find your genre" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1/">Sports</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Cars</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Anime</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Collections</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Users</NavDropdown.Item>
        </NavDropdown>
        */}
              {` `}
            </Nav>
            {this.props.switchTheme}
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default connect(mapStatetoProps, mapDispatchToProps)(naviagtionBar);
