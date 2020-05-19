import * as UtilActions from "./util.actions";

const intialState = {
  theme: "light",
};

const reducers = (state = intialState, action) => {
  switch (action.type) {
    case UtilActions.TOGGLE_THEME:
      if (state.theme === "light") {
        return {
          ...state,
          theme: "dark",
        };
      } else {
        return {
          ...state,
          theme: "light",
        };
      }

    default:
      return {
        ...state,
      };
  }
};

export default reducers;
