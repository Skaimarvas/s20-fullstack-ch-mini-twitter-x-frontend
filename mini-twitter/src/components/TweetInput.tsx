//Png
import profile from "../assets/gamer.png";
//Icon
import { Icon } from "@iconify/react";
//Hooks
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "../hooks/hook";
//Thunks
import { postTweetData } from "../store/thunks/TweetThunk";

/** Notes:
 *  I need to position the text inside the input.
 *  When the width is exceeded, the excess text should wrap and move downwards.
 *
 */

interface TweetFormData {
  content: string;
}

const TweetInput: React.FC = () => {
  const userLocalStorage = localStorage.getItem("userData");
  const userLS = userLocalStorage ? JSON.parse(userLocalStorage) : null;
  const dispatch = useAppDispatch();
  const { register, handleSubmit, reset } = useForm<TweetFormData>();
  const onSubmit: SubmitHandler<TweetFormData> = (data) => {
    dispatch(postTweetData(userLS?.id, data));
    reset();
  };
  console.log(userLS);

  return (
    <div className="flex gap-2 justify-start items-start px-3 py-2 border-b border-gray-300 w-full">
      <div className="flex justify-center items-center">
        <img
          src={profile}
          alt="profile"
          className="min-w-12 min-h-12 max-w-12 max-h-12 rounded-full"
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="flex flex-col gap-2">
          <div className="border-b border-gray-300">
            <input
              {...register("content")}
              type="text"
              className="flex h-[100px] w-full outline-none px-2 text-wrap"
              placeholder="What's happening"
            />
          </div>
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex  items-center  gap-1 ">
              <button className="rounded-full hover:bg-gray-300 p-2  hover:transition">
                <Icon
                  icon="clarity:image-line"
                  className="text-[20px] text-[#1D9BF0]"
                />
              </button>
              <button className="rounded-full hover:bg-gray-300 p-2  hover:transition">
                <Icon
                  icon="material-symbols:gif-box-outline"
                  className="text-[20px] text-[#1D9BF0]"
                />
              </button>
              <button className="rounded-full hover:bg-gray-300 p-2  hover:transition">
                <Icon
                  icon="foundation:graph-horizontal"
                  className="text-[20px] text-[#1D9BF0]"
                />
              </button>
              <button className="rounded-full hover:bg-gray-300 p-2  hover:transition">
                <Icon
                  icon="fa-regular:smile"
                  className="text-[20px] text-[#1D9BF0]"
                />
              </button>
              <button className="rounded-full hover:bg-gray-300 p-2  hover:transition">
                <Icon
                  icon="fluent-mdl2:date-time-12"
                  className="text-[20px] text-[#1D9BF0]"
                />
              </button>{" "}
            </div>
            <button
              type="submit"
              className="bg-[#1DA1F2] hover:bg-[#1d9cf0bb] rounded-full py-2 px-6 "
            >
              {" "}
              <span className="text-white font-bold">Tweet</span>{" "}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default TweetInput;
