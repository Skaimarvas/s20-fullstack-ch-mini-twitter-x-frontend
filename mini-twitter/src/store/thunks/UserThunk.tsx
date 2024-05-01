import axios from "axios";
import { Dispatch } from "redux";
import {
  postLoginDataToApi,
  postSignupDataToApi,
} from "../actions/UserActions";
import { toast } from "react-toastify";

export const postSignupData = (user: any) => {
  return (dispatch: Dispatch) => {
    axios
      .post("http://localhost:9000/v1/api/profile/register", user)
      .then((res: any) => {
        dispatch(postSignupDataToApi(res.data));
        console.log(res.data);
        toast.success("You have succesfully signed up!");
      })
      .catch((err: any) => {
        console.log(err.message);
      });
  };
};

export const postLoginData = (user: any) => {
  return (dispatch: Dispatch) => {
    axios
      .post("http://localhost:9000/v1/api/profile/login", user)
      .then((res: any) => {
        dispatch(postLoginDataToApi(res.data));
        console.log(res.data);
        toast.success("You have succesfully login!");
      })
      .catch((err: any) => {
        console.log(err);
        toast.error(err.response.data.message);
        throw Error;
      });
  };
};
