import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { persistStore } from "redux-persist";
import rootReducer from './Reducer';
import getMiddleware from './Middlewares';

const store = createStore(rootReducer, composeWithDevTools(getMiddleware()));
const persistor = persistStore(store);

const StoreComponent = { persistor, store };

export default StoreComponent;
