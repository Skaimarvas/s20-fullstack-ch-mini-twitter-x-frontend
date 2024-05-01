//Png
import { useParams } from "react-router-dom";
import avatar from "../assets/avatar/avatar1.png";
//Icon
import { Icon } from "@iconify/react";
//Hooks
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hook";
//Interface
import { TweetGetType } from "../Interfaces/TweetInterface";
//Thunk
import {
  listTweets,
  postlikeTweet,
  postretweetTweet,
  postunlikeTweet,
  postunretweetTweet,
} from "../store/thunks/TweetThunk";

interface TweetProps {
  tweetContent?: TweetGetType;
}

const Tweet: React.FC<TweetProps> = ({ tweetContent }) => {
  //-------------States----------------------------------------------//

  const dispatch = useAppDispatch();

  const { tweets } = useAppSelector((store) => store.tweet);

  const { likedTweets, retweetedTweets } = useAppSelector(
    (store) => store.user
  );

  const [isLiked, setIsLiked] = useState(false);

  const [isRetweeted, setIsRetweeted] = useState(false);

  const { id } = useAppSelector((store) => store.user);

  const params = useParams();

  //-----------------------------------------------------------------//

  const redTweetLike = likedTweets.find((tw: any) => tw.id == tweetContent?.id);
  const greenTweetRetweet = retweetedTweets.find(
    (tw: any) => tw.id == tweetContent?.id
  );

  const tweetId = tweets.find((tw) => tw.id == params.id);

  const handleLikeClick = () => {
    return !isLiked
      ? dispatch(postlikeTweet(id, tweetContent.id))
      : dispatch(postunlikeTweet(id, tweetContent.id));
  };

  const handleRetweetClick = () => {
    return !isRetweeted
      ? dispatch(postretweetTweet(id, tweetContent.id))
      : dispatch(postunretweetTweet(id, tweetContent.id));
  };

  //-------------Logs----------------------------------------------//

  // console.log("redTweetLike", redTweetLike);
  // console.log("greenTweetRetweet", greenTweetRetweet);
  // console.log("tweetContent", tweetContent);

  //-----------------------------------------------------------------//

  //-------------Effect----------------------------------------------//

  useEffect(() => {
    setIsLiked(redTweetLike ? true : false);
    setIsRetweeted(greenTweetRetweet ? true : false);
  }, [likedTweets, retweetedTweets]);

  useEffect(() => {
    dispatch(listTweets());
  }, []);

  //-------------Effect----------------------------------------------//
  return (
    <div className="flex justify-start items-start gap-2 py-2 px-3 hover:bg-gray-100   hover:transition border-b border-gray-300 w-full">
      <div className="flex justify-center items-center">
        <img
          src={avatar}
          alt="profile image"
          className="min-w-12 min-h-12 max-w-12 max-h-12 rounded-full"
        />
      </div>
      <div className="flex flex-col gap-5 w-full">
        <div className="flex flex-wrap gap-1">
          <span className="font-bold">Elon Musk</span>
          <span className="text-sm text-gray-500">@elon_musk</span>
          <span className="text-sm text-gray-500">.25m </span>
        </div>
        <div>
          {" "}
          {(tweetId && (
            <p className="text-sm text-gray-500 text-left">
              {" "}
              {tweetId.content}
            </p>
          )) || (
            <p className="text-sm text-gray-500 text-left">
              {tweetContent?.content}
            </p>
          )}
        </div>
        <div className="flex justify-between">
          {" "}
          <div className="flex items-center gap-2">
            <Icon
              icon="mage:message-round"
              className="text-[20px] text-gray-500"
            />
            <span className="text-sm text-gray-500 ">10</span>
          </div>
          <button
            className={`flex items-center gap-2 ${
              isRetweeted ? "text-green-500" : "text-gray-500"
            } `}
            onClick={handleRetweetClick}
          >
            <Icon icon="ant-design:retweet-outlined" className="text-[20px] " />
            <span className="text-sm  ">{tweetContent?.retweetCount}</span>
          </button>
          <button
            className={`flex items-center gap-2 ${
              isLiked ? "text-red-500" : "text-gray-500"
            } `}
            onClick={handleLikeClick}
          >
            <Icon icon="icon-park-outline:like" className="text-[20px] " />
            <span className="text-sm">{tweetContent?.likedCount} </span>
          </button>
          <div className="flex items-center gap-2">
            <Icon icon="uil:upload" className="text-[20px] text-gray-500" />
            <span className="text-sm text-gray-500 ">10</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon icon="uis:graph-bar" className="text-[20px] text-gray-500" />
            <span className="text-sm text-gray-500 ">283</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Tweet;
