export const POST_TWEET = "POST_TWEET";
export const UPDATE_TWEET = "UPDATE_TWEET";
export const REMOVE_TWEET = "REMOVE_TWEET";
export const LIST_TWEETS = "LIST_TWEETS";
export const LIKE_TWEET = "LIKE_TWEET";
export const UNLIKE_TWEET = "UNLIKE_TWEET";
export const RETWEET_TWEET = "RETWEET_TWEET";
export const UNRETWEET_TWEET = "UNRETWEET_TWEET";
export const GET_TWEET = "GET_TWEET";

export const likeTweet = (id: number) => {
  return {
    type: LIKE_TWEET,
    payload: id,
  };
};

export const getTweet = (id: number) => {
  return {
    type: GET_TWEET,
    payload: id,
  };
};

export const postTweet = (tweet: any) => {
  return {
    type: POST_TWEET,
    payload: tweet,
  };
};

export const updateTweet = (tweet: any) => {
  return {
    type: UPDATE_TWEET,
    payload: tweet,
  };
};

export const removeTweet = (tweet: any) => {
  return {
    type: REMOVE_TWEET,
    payload: tweet,
  };
};

export const listTweet = (tweets: any) => {
  return {
    type: LIST_TWEETS,
    payload: tweets,
  };
};
