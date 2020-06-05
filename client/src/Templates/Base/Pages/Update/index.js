import Update from "./Update";
//import actionTypes from "../../Store/base.actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  const UpdateState = {
    user: state.UserState.user,
    profile: state.UserState.profile,
    open: state.open,
    error: state.error,
    show: state.show,
    submitted: state.submitted,
  };
  return UpdateState;
};

const mapDispatchToProps = (dispatch) => {
  return {
    change: (name, value) =>
      dispatch({ type: actionTypes.MODIFY, name, value }),
    submit: (Data) => dispatch({ type: actionTypes.UPDATE, Data }),
    InitState: () => dispatch({ type: actionTypes.REFRESH }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Update);
