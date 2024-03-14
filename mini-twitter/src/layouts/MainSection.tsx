//Components
import { TweetInput } from "../components/TweetInput";
import { Tweet } from "../components/Tweet";
//Layouts
import Header from "./Header";
//Hooks
import { useEffect } from "react";
//Thunks
import { listTweets } from "../store/thunks/TweetThunk";
import { useAppDispatch, useAppSelector } from "../hooks/hook";

export const MainSection: React.FC = () => {
  const dispatch = useAppDispatch();
  const { tweets } = useAppSelector((state) => state.tweet);

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
      <Tweet>
        <p className="text-sm text-gray-500">
          Illegals beat up American police officers in Times Square, got out of
          jail for free and, instead of being deported, were given free tickets
          to California …
          <br />
          Why?
        </p>{" "}
      </Tweet>
      <Tweet>
        <p className="text-sm text-gray-500">
          Illegals beat up American police officers in Times Square, got out of
          jail for free and, instead of being deported, were given free tickets
          to California …
          <br />
          Why?
        </p>{" "}
      </Tweet>
      <Tweet>
        <p className="text-sm text-gray-500">
          Illegals beat up American police officers in Times Square, got out of
          jail for free and, instead of being deported, were given free tickets
          to California …
          <br />
          Why?
        </p>{" "}
      </Tweet>
      <Tweet>
        <p className="text-sm text-gray-500">
          Illegals beat up American police officers in Times Square, got out of
          jail for free and, instead of being deported, were given free tickets
          to California …
          <br />
          Why?
        </p>{" "}
      </Tweet>
    </div>
  );
};
