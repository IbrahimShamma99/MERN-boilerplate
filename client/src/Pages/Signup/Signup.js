import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Signup.css";
import propTypes from 'prop-types';
import {register} from '../../Utils/api-auth';
import {Redirect} from "react-router-dom";
import RouteNames from '../../constants/routes';

class Signup extends React.Component{
    state = {
        email:propTypes.string,
        _id:propTypes.string,
        first_name:propTypes.string,
        last_name:propTypes.string,
        bio:propTypes.string,
        interests:propTypes.object,
        location:propTypes.string,
        password:propTypes.string,
        open: false,
        error: propTypes.string,
        show:false
    };

    Changehandler = name => event => {
        this.setState({[name]: event.target.value})
      }

    clickSubmit = () => {
        const userData = {
            user:{
            first_name: this.state.first_name || undefined,
            last_name: this.state.last_name || undefined,
            email: this.state.email || undefined,
            password: this.state.password || undefined
            }
        }
        register(userData).then((data) => {
            console.log(data)
          if (data.error) {
            this.setState({error: data.error,show:true})
          } 
          else {
            console.log(data)
            this.setState({error: '', open: true})
            }
        })
      }
    
    render(){
        return(
    <div className="signup-form">
    {this.state.open ? <Redirect to={RouteNames.profile} /> :null}
    <Form>
    {this.state.show?
        <div className="alert">
        <span className="closebtn" onClick="this.parentElement.style.display='none';">&times;</span>
        {this.state.error}
        </div>
        :null}
    <Form.Group controlId="formBasicPassword">
    <Form.Label>First name</Form.Label>
    <Form.Control onChange={this.Changehandler("first_name")} type="username" placeholder="First name" />
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
    <Form.Label>Last name</Form.Label>
    <Form.Control onChange={this.Changehandler("last_name")} type="username" placeholder="Last name" />
    </Form.Group>

    <Form.Group controlId="formBasicEmail" >
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={this.Changehandler("email")} type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group controlId="formBasicPassword" >
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={this.Changehandler("password")} type="password" placeholder="Password" />
    </Form.Group>
        <Button size="md" /*style={}*/ variant="flat" onClick={this.clickSubmit}>
            Submit
        </Button>
    </Form>
    </div>
    )}
};

export default Signup;