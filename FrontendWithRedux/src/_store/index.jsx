import { createStore, applyMiddleware, compose } from "redux";
import { thunk as thunkMiddleware } from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "../_reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const loogerMiddleware = createLogger();
const persistconfig = {
    key : 'root',
    version : 1,
    storage : storage
};
const persistedReducer = persistReducer(persistconfig, rootReducer);
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    persistedReducer,
    composeEnhancer(applyMiddleware(thunkMiddleware, loogerMiddleware))
  );
  let persistor = persistStore(store);
  export { store, persistor };