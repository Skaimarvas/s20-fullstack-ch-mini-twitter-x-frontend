//Png
import profile from "../assets/gamer.png";
//Icon
import { Icon } from "@iconify/react";
//Hooks
import { useForm } from "react-hook-form";

/** Notes:
 *  Input içindeki yazıyı konumlandırmam lazım.
 *  Genişliğin sonuna geldiğinde fazlalık olan textleri aşağı kaydırması lazım.
 *
 */

export const TweetInput: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div className="flex gap-2 justify-start items-start w-full px-3 py-2 border-b border-gray-300">
      <div className="flex justify-center items-center">
        <img src={profile} alt="profile" className="w-12 h-12 rounded-full" />
      </div>
      <div className="flex flex-col gap-2   w-full">
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("tweet")}
              type="text"
              className="flex h-[100px] w-full outline-none px-2 text-wrap"
              placeholder="What's happening"
            />
          </form>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-5 ">
            <Icon
              icon="clarity:image-line"
              className="text-[25px] text-[#1D9BF0]"
            />

            <Icon
              icon="material-symbols:gif-box-outline"
              className="text-[25px] text-[#1D9BF0]"
            />

            <Icon
              icon="foundation:graph-horizontal"
              className="text-[25px] text-[#1D9BF0]"
            />

            <Icon
              icon="fa-regular:smile"
              className="text-[25px] text-[#1D9BF0]"
            />
            <Icon
              icon="fluent-mdl2:date-time-12"
              className="text-[25px] text-[#1D9BF0]"
            />
          </div>
          <button className="bg-[#1DA1F2] rounded-full py-2 px-6 ">
            {" "}
            <span className="text-white font-bold">Tweet</span>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
