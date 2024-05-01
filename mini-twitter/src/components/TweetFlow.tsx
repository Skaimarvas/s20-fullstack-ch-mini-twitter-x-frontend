import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hook";
import { RootState } from "../store/store";
import { listTweets } from "../store/thunks/TweetThunk";
import Tweet from "./Tweet";

const TweetFlow: React.FC = () => {
  const dispatch = useAppDispatch();
  const { tweets } = useAppSelector((store: RootState) => store.tweet);

  useEffect(() => {
    dispatch(listTweets());
  }, []);
  return (
    <div className="w-full">
      {tweets &&
        tweets.map((tweet: any) => (
          // <Link to={`tweet/${tweet.id}`}></Link>
          <Tweet key={tweet.id} tweetContent={tweet} />
        ))}
    </div>
  );
};

export default TweetFlow;
