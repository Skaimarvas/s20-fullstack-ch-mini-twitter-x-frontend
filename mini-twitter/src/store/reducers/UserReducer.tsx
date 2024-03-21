import { LOGOUT_USER, POST_LOGIN_DATA_TO_API } from "../actions/UserActions";

interface GlobalState {
  user: any;
}
const initialState: GlobalState = {
  user: {},
};
export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case POST_LOGIN_DATA_TO_API:
      const userData = {
        id: action.payload.id,
        username: action.payload.userName,
        email: action.payload.email,
      };
      localStorage.setItem("userData", JSON.stringify(userData));
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
