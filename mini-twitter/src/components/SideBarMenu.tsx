import React from "react";
//Icon
import { Icon } from "@iconify/react";

const SideBarMenu: React.FC = () => {
  return (
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
  );
};

export default SideBarMenu;
