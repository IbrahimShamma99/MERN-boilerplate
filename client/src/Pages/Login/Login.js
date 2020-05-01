import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import { Redirect } from "react-router-dom";
import RouteNames from "../../constants/routes";
import { login } from "../../Utils/api-auth";
import { connect } from "react-redux";
import * as actionTypes from '../../store/actions';
import PropTypes from 'prop-types';

class Login extends React.Component {
  state = {
    error:"",
    open:false,
    show:false
  }
  onChangeHandler = (name) => (event) => {
    this.props.change(name,event.target.value)
    //this.setState({ [name]: event.target.value });
  };
  onSubmitHandler = () => {
    if (this.state.email && this.state.password) {
      const userData = {
        user: {
          email: this.state.email,
          password: this.state.password,
        },
      };
      login(userData).then((data) => {
        if (data.error) {
          this.setState({ error: data.error, show: true });
          console.log(data.error);
        } else {
          console.log(data);
          this.setState({ error: "", open: true });
        }
      });
    }
  };

  render() {
    return (
      <div className="login-form">
        {this.state.open ? <Redirect to={RouteNames.profile} /> : null}
        {console.log(this.state)}

        <Form>
          {this.state.show ? (
            <div class="alert">
              <span
                class="closebtn"
                onclick="this.parentElement.style.display='none';"
              >
                &times;
              </span>
              {this.state.error}
            </div>
          ) : null}
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={this.onChangeHandler("email")}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={this.onChangeHandler("password")}
              type="password"
              placeholder="Password"
            />
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
};

Login.propTypes = {
  email:PropTypes.string,
  password:PropTypes.string
};

const mapStateToProps =state=>{
  console.log("STATE=",state)
  return {
    email:state.email,
    password:state.password
  }
};
const mapDispatchToProps = dispatch =>{
  return {
    change:(name,value)=>dispatch({type:actionTypes.MODIFY,name,value}),
    submit:()=>dispatch({type:actionTypes.LOGIN})
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Login);
