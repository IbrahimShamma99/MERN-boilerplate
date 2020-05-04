import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

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
    rootReducer,composeWithDevTools(getMiddleware())
    
);

export default store;