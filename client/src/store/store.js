import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

const loggerMiddleware = createLogger();

const getMiddleware = () => {
    if (process.env.NODE_ENV === 'production') 
    {
        return applyMiddleware(
            thunkMiddleware
        )
    }
    else {
        return applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )
    }
}

const store = createStore(
    rootReducer,composeWithDevTools(getMiddleware())
    
);

export default store;