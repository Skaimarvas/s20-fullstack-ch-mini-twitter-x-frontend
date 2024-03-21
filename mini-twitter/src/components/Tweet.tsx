//Png
import avatar from "../assets/avatar/avatar1.png";
//Icon
import { Icon } from "@iconify/react";

interface TweetProps {
  children: React.ReactNode;
}

const Tweet: React.FC<TweetProps> = ({ children }) => {
  return (
    <div className="flex justify-start items-start gap-2 py-2 px-3 border-b border-gray-300 w-full">
      <div className="flex justify-center items-center">
        <img src={avatar} alt="" className="w-12 h-12 rounded-full" />
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex gap-1 items-center">
          <span className="font-bold">Elon Musk</span>
          <span className="text-sm text-gray-500">@elon_musk</span>
          <span className="text-sm text-gray-500">.25m </span>
        </div>
        <div className="max-w-[500px] ">
          {children || (
            <p className="text-sm text-gray-500">
              Illegals beat up American police officers in Times Square, got out
              of jail for free and, instead of being deported, were given free
              tickets to California …
              <br />
              Why?
            </p>
          )}
        </div>
        <div className="flex gap-5">
          {" "}
          <div className="flex items-center gap-2">
            <Icon
              icon="mage:message-round"
              className="text-[20px] text-gray-500"
            />
            <span className="text-sm text-gray-500 ">10</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon
              icon="ant-design:retweet-outlined"
              className="text-[20px] text-gray-500"
            />
            <span className="text-sm text-gray-500 ">5</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon
              icon="icon-park-outline:like"
              className="text-[20px] text-gray-500"
            />
            <span className="text-sm text-gray-500 ">8</span>
          </div>
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
