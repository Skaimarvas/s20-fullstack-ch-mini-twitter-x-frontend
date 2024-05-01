import { UserState } from "../../Interfaces/UserInterface";
import { LOGOUT_USER, POST_LOGIN_DATA_TO_API } from "../actions/UserActions";

const initialState: UserState = {
  id: 0,
  email: "",
  fullName: "",
  password: "",
  userName: "",
  tweets: [],
  likedTweets: [],
  retweetedTweets: [],
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
      return (state = action.payload);
    case LOGOUT_USER:
      return {
        ...state,
      };
    default:
      return state;
  }
};
