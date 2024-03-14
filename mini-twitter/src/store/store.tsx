import logger from "redux-logger";
import { thunk } from "redux-thunk";
import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  Middleware,
} from "redux";

const reducers = combineReducers({});

const middleware: Middleware[] = [logger, thunk];

export const store = createStore(reducers, applyMiddleware(...middleware));
