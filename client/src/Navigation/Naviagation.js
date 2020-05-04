import React from 'react';
import "./Navigation.css";
import RouteNames from "../constants/routes";

//SECTION importing bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "react-bootstrap/Form";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
//import NavDropdown from "react-bootstrap/NavDropdown"

const naviagtionBar = (props) => (
  <div className="navbar">
    <Navbar fixed="top" className="input" bg="black" expand="lg">
    <Navbar.Brand href={RouteNames.home}><h4>App</h4></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href={RouteNames.profile}><h5>Profile</h5></Nav.Link>
        <Nav.Link href={RouteNames.register}><h5>Register</h5></Nav.Link>
        <Nav.Link href={RouteNames.login}><h5>Login</h5></Nav.Link>
        <Nav.Link href={RouteNames.login}><h5>Logout</h5></Nav.Link>

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
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-2" />
        <Button variant="outline-danger">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
  </div>
);

export default naviagtionBar;
