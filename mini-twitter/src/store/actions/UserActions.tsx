export const POST_SIGNUP_DATA_TO_API = "POST_SIGNUP_DATA_TO_API";
export const POST_LOGIN_DATA_TO_API = "POST_LOGIN_DATA_TO_API";
export const LOGOUT_USER = "LOGOUT_USER";

export const postSignupDataToApi = (signup: any) => {
  return {
    type: POST_SIGNUP_DATA_TO_API,
    payload: signup,
  };
};

export const postLoginDataToApi = (login: any) => {
  return {
    type: POST_LOGIN_DATA_TO_API,
    payload: login,
  };
};

export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
  };
};
