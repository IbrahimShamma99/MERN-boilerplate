import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css"

const login = (props) => (
    <div className="login-form">
    <Form>
    <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
    <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group controlId="formBasicSubmit">
    <Button variant="flat" type="submit">
        Submit
    </Button>
    </Form.Group>
    </Form>  
    </div>
);

export default login