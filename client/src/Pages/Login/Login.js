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

  componentDidMount() {
    this.props.InitState();
  };

  onChangeHandler = (name) => (event) => {
    this.props.change(name,event.target.value)
  };

  onSubmitHandler = () => {
    if (this.props.email && this.props.password) {
      const userData = {
        user: {
          email: this.props.email,
          password: this.props.password,
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
        {this.props.open ? <Redirect to={RouteNames.profile} /> : null}

        <Form>
          {this.props.show ? (
            <div className="alert">
              <span
              className="closebtn"
                onclick="this.parentElement.style.display='none';"
              >
                &times;
              </span>
              {this.props.error}
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
            <Button onClick={this.props.submit} variant="flat">
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

const mapStateToProps = state => {
  console.log("mapStateToProps=",state)
  return {
    email:state.email,
    password:state.password,
    error:state.error,
    open:state.open,
    show:state.show,
  }
};
const mapDispatchToProps = dispatch =>{
  return {
    change:(name,value)=>dispatch({type:actionTypes.MODIFY,name,value}),
    submit:()=>dispatch({type:actionTypes.LOGIN}),
    InitState:() => dispatch({type:actionTypes.INIT})
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Login);
