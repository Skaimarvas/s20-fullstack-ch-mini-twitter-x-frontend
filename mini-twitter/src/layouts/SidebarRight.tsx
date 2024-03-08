import React from "react";
import { useForm } from "react-hook-form";
//Icon
import { Icon } from "@iconify/react";
//Pngs
import avatar1 from "../assets/avatar/avatar1.png";
import avatar2 from "../assets/avatar/avatar2.png";
//Layouts
import Footer from "./Footer";

/**Notes:
 * Search Bar can be made as a component
 *
 */

export default function SidebarRight() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div className="flex flex-col gap-2 pt-4 pl-8 border-l border-gray-300">
      <div className="sticky">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="relative">
            <input
              {...register("search")}
              type="text"
              className="bg-gray-100 py-2 pl-[50px] pr-2 rounded-full"
              placeholder="Search Twitter"
            />

            <div className="absolute inset-y-0 left-3 flex items-center">
              <Icon icon="ri:search-line" className="text-2xl text-gray-400" />
            </div>
          </div>
        </form>
      </div>
      <div className="flex flex-col bg-gray-100 rounded-md p-2 gap-5">
        <div className="flex justify-between items-center">
          <h2 className="text-[18px] font-bold">Trends for you </h2>
          <Icon icon="tabler:settings" className="text-2xl" />
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <div className="flex flex-col items-start">
              <span className="text-sm text-gray-500">Trending in Germany</span>
              <span className="text-sm font-bold">Revolution</span>
              <span className="text-sm text-gray-500">50.4K Tweets</span>
            </div>
            <div>
              {" "}
              <Icon icon="icon-park-outline:more" className="text-[20px]" />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col items-start">
              <span className="text-sm text-gray-500">Trending in Germany</span>
              <span className="text-sm font-bold">Revolution</span>
              <span className="text-sm text-gray-500">50.4K Tweets</span>
            </div>
            <div>
              {" "}
              <Icon icon="icon-park-outline:more" className="text-[20px]" />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col items-start">
              <span className="text-sm text-gray-500">Trending in Germany</span>
              <span className="text-sm font-bold">Revolution</span>
              <span className="text-sm text-gray-500">50.4K Tweets</span>
            </div>
            <div>
              {" "}
              <Icon icon="icon-park-outline:more" className="text-[20px]" />
            </div>
          </div>
        </div>
        <div className="flex justify-start">
          <span className="text-sm text-[#1DA1F2]">Show More</span>
        </div>
      </div>
      <div className="flex flex-col bg-gray-100 rounded-md p-2 gap-5">
        <div className="flex justify-between items-center">
          <h2 className="text-[18px] font-bold">You might like</h2>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <div className="flex ">
              <div>
                <img src={avatar1} alt="" className="h-12 w-12 rounded-full" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold">Elon Musk</span>
                <span className="text-sm  text-gray-500">@elon_musk</span>
              </div>
            </div>
            <div className="flex justify-center items-center bg-black rounded-full my-2  px-4 text-white ">
              <span className="text-sm font-bold">Follow</span>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex ">
              <div>
                <img src={avatar2} alt="" className="h-12 w-12 rounded-full" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold">Bill Gates</span>
                <span className="text-sm text-gray-500">@bill_gates</span>
              </div>
            </div>
            <div className="flex justify-center items-center bg-black rounded-full my-2  px-4 text-white ">
              <span className="text-sm font-bold">Follow</span>
            </div>
          </div>
        </div>
        <div className="flex justify-start">
          <span className="text-sm text-[#1DA1F2]">Show More</span>
        </div>
      </div>
      <Footer />
    </div>
  );
}
