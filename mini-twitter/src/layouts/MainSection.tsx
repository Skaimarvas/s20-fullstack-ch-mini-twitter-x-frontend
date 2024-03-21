import { mockTweets } from "../mock/MockTweet";
//Components
import { TweetInput } from "../components/TweetInput";
import { Tweet } from "../components/Tweet";
//Layouts
import Header from "./Header";
//Hooks
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hook";
//Thunks
import { listTweets } from "../store/thunks/TweetThunk";
import { RootState } from "../store/store";

export const MainSection: React.FC = () => {
  const dispatch = useAppDispatch();
  const { tweets } = useAppSelector((store: RootState) => store.tweet);

  useEffect(() => {
    dispatch(listTweets());
  }, []);
  return (
    <div className=" flex flex-col items-center w-2/5">
      <Header />
      <TweetInput />
      {tweets &&
        tweets.map((tweet: any) => (
          <Tweet key={tweet.id}>
            <p className="text-sm text-gray-500">{tweet.content}</p>
          </Tweet>
        ))}
      {mockTweets &&
        mockTweets.map((tweet: string, index) => (
          <Tweet key={index}>
            <p className="text-sm text-gray-500">{tweet}</p>
          </Tweet>
        ))}
    </div>
  );
};
