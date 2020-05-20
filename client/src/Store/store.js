import { createStore ,applyMiddleware, compose } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import { connectRouter, routerMiddleware } from 'connected-react-router'
import userReducer from '../USER/Store/user.reducers';
import utileReducer from './util.reducers';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

const composeEnhancers =
  (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const persistConfig = {
  key: 'root',
  storage: storage,
};


// const rootReducer = { 
//   util:utileReducer,
//   UserState:userReducer
// }
export default ( {history, extraReducers={}, extraMiddlewares=[] } ) => {

  const rootReducer = {
    ...userReducer,
    ...utileReducer
  };

  const historyMiddleware = routerMiddleware(history); // Build the middleware for intercepting and dispatching navigation actions
  const persistCombinedReducers = persistCombineReducers(persistConfig, rootReducer);

  const store = createStore(
    connectRouter(history)(persistCombinedReducers),
    composeEnhancers(composeWithDevTools(getMiddleware())
  ))

  const persistor = persistStore(store);

  return {store, persistor};
};