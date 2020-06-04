import { createStore } from "redux";
import { persistStore } from "redux-persist";
import rootReducer from "./Reducer";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { applyMiddleware } from "redux";
import asyncDispatchMiddleware from "async-dispatch";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

const loggerMiddleware = createLogger();

const DevMiddlewares = applyMiddleware(
  thunkMiddleware,
  asyncDispatchMiddleware
);
const ProdMiddlewares = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware,
  asyncDispatchMiddleware
);

const getMiddleware = () => {
    if (process.env.NODE_ENV === "production") {
      return ProdMiddlewares;
    } else {
      return DevMiddlewares;
    }
  };
  
const middlewares = composeWithDevTools(getMiddleware());
  
const store = createStore(rootReducer, middlewares);
const persistor = persistStore(store);

const StoreComponent = { persistor, store };

export default StoreComponent;
