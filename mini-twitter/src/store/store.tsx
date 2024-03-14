import logger from "redux-logger";
import { thunk } from "redux-thunk";
import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  Middleware,
} from "redux";
import { tweetReducer } from "./reducers/TweetReducer";
import { userReducer } from "./reducers/UserReducer";

const reducers = combineReducers({
  tweet: tweetReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const middleware: Middleware[] = [logger, thunk];

export const store = createStore(reducers, applyMiddleware(...middleware));
