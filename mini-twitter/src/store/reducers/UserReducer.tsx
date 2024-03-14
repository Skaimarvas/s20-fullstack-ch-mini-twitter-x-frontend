import {
  LOGOUT_USER,
  POST_LOGIN_DATA_TO_API,
  POST_SIGNUP_DATA_TO_API,
} from "../actions/UserActions";

interface GlobalState {
  user: any;
}
const initialState: GlobalState = {
  user: {},
};
export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case POST_SIGNUP_DATA_TO_API:
      return {
        ...state,
        user: action.payload,
      };
    case POST_LOGIN_DATA_TO_API:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: {},
      };
    default:
      return state;
  }
};
