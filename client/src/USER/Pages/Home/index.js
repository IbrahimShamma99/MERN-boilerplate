import Home from './home';
import { connect } from "react-redux";
import * as actionTypes from "../../Store/user.actions";

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

export default connect(mapStatetoProps,mapDispatchToProps)(Home);