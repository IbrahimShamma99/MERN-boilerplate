import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css"
import {Redirect} from "react-router-dom";
import RouteNames from '../../constants/routes';
import {login} from '../../Utils/api-auth';

class Login extends React.PureComponent {
    state = {
      email:"",
      password:"",
      error:"",
      open:false
    }
    onChangeHandler =  name => event => {
      this.setState({[name]:event.target.value})
    }
    onSubmitHandler = () => {
      const userData = {
        user:{
          email:this.state.email,
          password:this.state.password
        }
      };
      login(userData).then((data) => {
        console.log(data)
      if (data.error) {
        this.setState({error: data.error})
      } 
      else {
        console.log(data)
        this.setState({error: '', open: true})
        }
    })

    }

    render(){
    return (
    <div className="login-form">
    {this.state.open ? <Redirect to={RouteNames.profile} /> :null}
    {console.log(this.state)}
    <Form>
    <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={this.onChangeHandler("email")} type="email" placeholder="Enter email" />
    </Form.Group>
    <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={this.onChangeHandler("password")} type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group controlId="formBasicSubmit">
    <Button onClick={this.onSubmitHandler} variant="flat">
        Submit
    </Button>
    </Form.Group>
    </Form>  
    </div>
);
    }
  }
export default Login;