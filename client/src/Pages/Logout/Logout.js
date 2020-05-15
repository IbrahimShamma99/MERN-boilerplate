import React from "react";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";
import { Redirect } from "react-router-dom";
import RouteNames from "../../constants/routes";
// import auth from '../../Utils/auth-helper';

class Logout extends React.Component {

  componentWillMount(){
    console.log("logoutUser");
    return true;
  }
  componentDidMount() {
    console.log("logoutUser")
    this.props.logoutUser();
  }

  render() {
    return (
      <div>
        {<Redirect to={RouteNames.login} /> }
        <p>LOGGING OUT</p>
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
    InitState:() => dispatch({type:actionTypes.REFRESH}),
    logoutUser: () => dispatch({ type: actionTypes.LOGOUT }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
