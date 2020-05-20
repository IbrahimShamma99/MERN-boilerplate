import userReducer from "../USER/Store/user.reducers";
import utileReducer from "./util.reducers";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

const persistConfig = {
  user: {
    key: "user",
    storage: storage,
  },
};

const rootReducer = combineReducers({
  util: utileReducer,
  UserState: persistReducer(persistConfig.user, userReducer),
});

export default rootReducer;
