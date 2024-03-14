import axios from "axios";
import { Dispatch } from "redux";
import { postSignupDataToApi } from "../actions/UserActions";

export const postSignupData = (user: any) => {
  return (dispatch: Dispatch) => {
    axios
      .post("/v1/api/profile/register", user)
      .then((res: any) => {
        dispatch(postSignupDataToApi(res.data));
      })
      .catch((err: any) => {
        console.log(err.message);
      });
  };
};
