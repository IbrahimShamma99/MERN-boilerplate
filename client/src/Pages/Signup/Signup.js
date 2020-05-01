import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Signup.css";
// import propTypes from "prop-types";
import { Redirect } from "react-router-dom";
import RouteNames from "../../constants/routes";
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions';

class Signup extends React.Component {
//   state = {
//     open: false,
//     error: propTypes.string,
//     show: false,
//   };

  Changehandler = (name) => (event) => {
      this.props.change(name,event.target.value);
  };

  clickSubmit = () => {
    // register(userData).then((data) => {
    //   if (data.error) {
    //     this.setState({ error: data.error, show: true });
    //   } else {
    //     this.setState({ error: "", open: true });
    //   }
    // });
  };

  render() {
    return (
      <div className="signup-form">
        {this.props.open ? <Redirect to={RouteNames.profile} /> : null}
        <Form>
          {this.props.show ? (
            <div className="alert">
              <span
                className="closebtn"
                onClick="this.parentElement.style.display='none';"
              >
                &times;
              </span>
              {this.props.error}
            </div>
          ) : null}
          <Form.Group controlId="formBasicPassword">
            <Form.Label>First name</Form.Label>
            <Form.Control
              onChange={this.Changehandler("first_name")}
              type="username"
              placeholder="First name"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              onChange={this.Changehandler("last_name")}
              type="username"
              placeholder="Last name"
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={this.Changehandler("email")}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={this.Changehandler("password")}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button
            size="md"
            /*style={}*/ variant="flat"
            onClick={()=>{return this.props.submit()}}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    const RegisterState = {
        email:state.email,
        first_name: state.first_name,
        last_name: state.last_name,
        password: state.password,
        open: state.open,
        error: state.error,
        show: state.show
      };
  return RegisterState;
};
const mapDispatchToProps = (dispatch) => {
  return {
    change: (name, value) => dispatch({ type: actionTypes.MODIFY, name, value }),
    submit: () => dispatch({ type: actionTypes.REGISTER}),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Signup);