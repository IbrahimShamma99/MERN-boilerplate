import { createStore, applyMiddleware , combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import userReducer from '../USER/Store/user.reducers';
import utileReducer from './util.reducers';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage: storage,
};

const rootReducer =combineReducers({
  util:utileReducer,
  UserState:userReducer
})

const pReducer = persistReducer(persistConfig, rootReducer);

const loggerMiddleware = createLogger();

const asyncDispatchMiddleware = store => next => action => {
    let syncActivityFinished = false;
    let actionQueue = [];
  
    function flushQueue() {
      actionQueue.forEach(a => store.dispatch(a)); // flush queue
      actionQueue = [];
    }
  
    function asyncDispatch(asyncAction) {
      actionQueue = actionQueue.concat([asyncAction]);
  
      if (syncActivityFinished) {
        flushQueue();
      }
    }
  
    const actionWithAsyncDispatch =
        Object.assign({}, action, { asyncDispatch });
  
    next(actionWithAsyncDispatch);
    syncActivityFinished = true;
    flushQueue();
  };   



const getMiddleware = () => {
    if (process.env.NODE_ENV === 'production') 
    {
        return applyMiddleware(
            thunkMiddleware,
            asyncDispatchMiddleware
        )
    }
    else {
        return applyMiddleware(
            thunkMiddleware,
            loggerMiddleware,
            asyncDispatchMiddleware
        )
    }
}

const store = createStore(
  pReducer,composeWithDevTools(getMiddleware()) 
);
const persistor = persistStore(store);

const StoreComponent = {persistor ,store};

export default StoreComponent;