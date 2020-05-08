import React from 'react';
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";

const logout = (props) => (
    <div>
        <p>loging out</p>
    </div>
);

const mapStateToProps = (state) => {
    const LogoutState = {};
    return LogoutState;
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      change: (name, value) =>
        dispatch({ type: actionTypes.MODIFY, name, value }),
      submit: () => dispatch({ type: actionTypes.REGISTER }),
    };
  };
  


export default connect(mapStateToProps, mapDispatchToProps)(logout);