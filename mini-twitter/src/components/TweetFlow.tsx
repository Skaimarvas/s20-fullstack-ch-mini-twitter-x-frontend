import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hook";
import Tweet from "./Tweet";
import { listTweets } from "../store/thunks/TweetThunk";
import { RootState } from "../store/store";
import { Link, useParams } from "react-router-dom";

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
          <Tweet key={tweet.id} tweetContent={tweet} />
        ))}
    </div>
  );
};

export default TweetFlow;
