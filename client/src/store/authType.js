const INITIAL_STATE = {
    authType: null
  };
  const applySetUserType = (state, action) => ({
    ...state,
    authType: action.payload
  });
  function authTypeReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case 'AUTH_TYPE': {
        return applySetUserType(state, action);
      }
      default:
        return state;
    }
  }
  export default authTypeReducer;
  