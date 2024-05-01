import axios from "axios";
import { Dispatch } from "redux";
import { listTweet } from "../actions/TweetActions";

export const postlikeTweet = (userId: number, tweetId: number) => {
  return (dispatch: Dispatch) => {
    axios
      .post(
        `http://localhost:9000/v1/api/kiwitter/tweet/like/${userId}/${tweetId}`
      )
      .then((res: any) => {
        dispatch(listTweet(res.data));
      })
      .catch((err: any) => console.log(err.message));
  };
};

export const postunlikeTweet = (userId: number, tweetId: number) => {
  return (dispatch: Dispatch) => {
    axios
      .delete(
        `http://localhost:9000/v1/api/kiwitter/tweet/like/${userId}/${tweetId}`
      )
      .then((res: any) => {
        dispatch(listTweet(res.data));
      })
      .catch((err: any) => console.log(err.message));
  };
};

export const postretweetTweet = (userId: number, tweetId: number) => {
  return (dispatch: Dispatch) => {
    axios
      .post(
        `http://localhost:9000/v1/api/kiwitter/tweet/retweet/${userId}/${tweetId}`
      )
      .then((res: any) => {
        dispatch(listTweet(res.data));
      })
      .catch((err: any) => console.log(err.message));
  };
};

export const postunretweetTweet = (userId: number, tweetId: number) => {
  return (dispatch: Dispatch) => {
    axios
      .delete(
        `http://localhost:9000/v1/api/kiwitter/tweet/retweet/${userId}/${tweetId}`
      )
      .then((res: any) => {
        dispatch(listTweet(res.data));
      })
      .catch((err: any) => console.log(err.message));
  };
};

export const listTweets = () => {
  return (dispatch: Dispatch) => {
    axios
      .get("http://localhost:9000/v1/api/kiwitter/tweet")
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
