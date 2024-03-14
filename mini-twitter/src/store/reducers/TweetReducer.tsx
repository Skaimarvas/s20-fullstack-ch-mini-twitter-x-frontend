import { LIST_TWEETS } from "../actions/TweetActions";

interface GlobalState {
  tweets: any[];
}

const initialState: GlobalState = {
  tweets: [],
};

export const tweetReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LIST_TWEETS:
      return {
        ...state,
        tweets: [...action.payload],
      };
    default:
      return state;
  }
};
