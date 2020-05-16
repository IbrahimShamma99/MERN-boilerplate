import React from "react";
import "./home.scss";
import Aux from "../../hoc";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";

const mapStatetoProps = (state) => {
  //TODO list of whatever the project wants
  return {
    open: state.open,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    refresh: () => dispatch({ type: actionTypes.REFRESH }),
  };
};

class Home extends React.Component {
  componentDidMount() {
    this.props.refresh();
  }
  render() {
    return (
      <Aux className="container">
        <div className="col">
          <div className="row"></div>{" "}
        </div>{" "}
      </Aux>
    );
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Home);
