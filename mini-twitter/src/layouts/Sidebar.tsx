import React from "react";
//Icon
import { Icon } from "@iconify/react";
//Png
import gamer from "../assets/gamer.png";

export default function Sidebar() {
  return (
    <div className="flex flex-col gap-10 pt-5 pr-8 border-r border-gray-300 ">
      <div>
        {" "}
        <Icon icon="logos:twitter" className="text-[40px]" />{" "}
      </div>
      <div className="flex flex-col gap-[20px] font-bold">
        <div className="flex gap-4 items-center">
          {" "}
          <Icon icon="mingcute:home-5-line" className="text-[30px]" />
          <span>Home</span>{" "}
        </div>
        <div className="flex gap-4 items-center">
          {" "}
          <Icon icon="iconoir:hashtag" className="text-[30px]" />
          <span>Explore</span>{" "}
        </div>
        <div className="flex gap-4 items-center">
          {" "}
          <Icon icon="tdesign:notification" className="text-[30px]" />
          <span>Notification</span>
        </div>
        <div className="flex gap-4 items-center">
          {" "}
          <Icon icon="lets-icons:message" className="text-[30px]" />
          <span>Messages</span>
        </div>
        <div className="flex gap-4 items-center">
          {" "}
          <Icon
            icon="material-symbols:bookmark-outline"
            className="text-[30px]"
          />
          <span>Bookmarks</span>
        </div>
        <div className="flex gap-4 items-center">
          {" "}
          <Icon icon="ri:file-list-2-line" className="text-[30px]" />
          <span>Lists</span>
        </div>
        <div className="flex gap-4 items-center">
          {" "}
          <Icon icon="iconamoon:profile-fill" className="text-[30px]" />
          <span>Profile</span>
        </div>
        <div className="flex gap-4 items-center">
          {" "}
          <Icon icon="mingcute:more-3-line" className="text-[30px]" />
          <span>More</span>
        </div>
        <button className="text-white bg-[#1D9BF0] rounded-full px-[70px] py-2">
          {" "}
          Tweet
        </button>
      </div>
      <div className="flex items-center justify-between">
        {" "}
        <div className="flex items-center gap-1">
          <img src={gamer} alt="" className="rounded-full h-10 w-10" />
          <div className="flex flex-col gap-1">
            <span className="font-bold">Kaim Arvas</span>
            <span>@kaim_arvas</span>
          </div>
        </div>
        <Icon icon="icon-park-outline:more" className="text-[30px]" />
      </div>
    </div>
  );
}
