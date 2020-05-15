import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import { Redirect } from "react-router-dom";
import RouteNames from "../../constants/routes";
import { connect } from "react-redux";
import * as actionTypes from '../../store/actions';
import PropTypes from 'prop-types';

class Login extends React.PureComponent {

  state = {
    submitted: false,
    ok: true,
  };

  componentDidMount() {
    this.props.refresh();
  };

  Changehandler = (name) => (event) => {
    this.props.change(name,event.target.value)
  };

  SubmitHandler = () => {
    if (this.props.email &&this.props.password){
    this.setState({ submitted: true });
    return this.props.submit();  
    }
    else {
      this.setState({ submitted: true });
      return this.props.ExternalError("fill required data");
    }
  };

  render() {
    return (
      <div className="login-form">
        {this.props.open ? <Redirect to={RouteNames.base} /> : null}
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
        <div
        className={
          "form-group" +
          (this.state.submitted && !this.props.email ? " has-error" : "")
        }
      >
        <label htmlFor="email">Email</label>
        <input
          type="text"
          className="form-control"
          name="email"
          value={this.props.email}
          onChange={this.Changehandler("email")}
          placeholder="Email"
        />
        {this.state.submitted && !this.props.email && (
          <div className="help-block">Email is required</div>
        )}
      </div>

      <div
        className={
          "form-group" +
          (this.state.submitted && !this.props.last_name
            ? " has-error"
            : "")
        }
      >
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          value={this.props.password}
          onChange={this.Changehandler("password")}
          placeholder="Password"
        />
        {this.state.submitted && !this.props.password && (
          <div className="help-block">Password is required</div>
        )}
      </div>
      <Button
      size="md"
      /*style={}*/ variant="flat"
      onClick={this.SubmitHandler}
    >
      Submit
    </Button>
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
    submitted: state.submitted
  }
};
const mapDispatchToProps = dispatch =>{
  return {
    change:(name,value)=>dispatch({type:actionTypes.MODIFY,name,value}),
    submit:()=>dispatch({type:actionTypes.LOGIN}),
    InitState:() => dispatch({type:actionTypes.REFRESH}),
    ExternalError:(value) => dispatch({type:actionTypes.ExternalError,message:value}),
    refresh:()=>dispatch({type:actionTypes.REFRESH})
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Login);
