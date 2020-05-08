import React from "react";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";
import { Redirect } from "react-router-dom";
import RouteNames from "../../constants/routes";

class Logout extends React.Component {
  
  componentWillMount() {
    this.props.logoutUser();
  }

  render() {
    return (
      <div>
        {this.props.open ? <Redirect to={RouteNames.login} /> : null}
        <p>loging out</p>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const LogoutState = {
    open: state.open,
  };
  return LogoutState;
};

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch({ type: actionTypes.LOGOUT }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
