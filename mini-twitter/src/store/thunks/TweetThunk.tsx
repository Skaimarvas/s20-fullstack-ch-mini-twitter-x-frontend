import axios from "axios";
import { Dispatch } from "redux";
import { listTweet } from "../actions/TweetActions";

export const listTweets = () => {
  return (dispatch: Dispatch) => {
    axios
      .get("http://localhost:9000/v1/api/kiwitter/tweets")
      .then((res: any) => dispatch(listTweet(res.data)))
      .catch((err: any) => console.log(err.message));
  };
};

export const postTweetData = (userId: String, tweet: any) => {
  return (dispatch: Dispatch) => {
    axios
      .post(`http://localhost:9000/v1/api/kiwitter/${userId}/tweet`, tweet)
      .then((res: any) => {
        console.log(res.data);
        dispatch(listTweets() as any);
      })
      .catch((err: any) => console.log(err.data));
  };
};
