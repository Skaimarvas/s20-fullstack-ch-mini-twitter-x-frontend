import React from "react";
//Icon
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const SideBarMenu: React.FC = () => {
  return (
    <div className="flex flex-col gap-[10px] font-bold lg:items-center ">
      <Link to="/" className="sidebarmenu">
        {" "}
        <Icon icon="mingcute:home-5-line" className="text-[30px]" />
        <span className="lg:hidden text-[20px]  ">Home</span>{" "}
      </Link>
      <button className="sidebarmenu">
        {" "}
        <Icon icon="iconoir:hashtag" className="text-[30px]" />
        <span className="lg:hidden text-[20px] ">Explore</span>{" "}
      </button>
      <button className="sidebarmenu">
        {" "}
        <Icon icon="tdesign:notification" className="text-[30px]" />
        <span className="lg:hidden text-[20px] ">Notification</span>
      </button>
      <button className="sidebarmenu">
        {" "}
        <Icon icon="lets-icons:message" className="text-[30px]" />
        <span className="lg:hidden text-[20px] ">Messages</span>
      </button>
      <button className="sidebarmenu">
        {" "}
        <Icon
          icon="material-symbols:bookmark-outline"
          className="text-[30px]"
        />
        <span className="lg:hidden text-[20px] ">Bookmarks</span>
      </button>
      <button className="sidebarmenu">
        {" "}
        <Icon icon="ri:file-list-2-line" className="text-[30px]" />
        <span className="lg:hidden text-[20px] ">Lists</span>
      </button>
      <button className="sidebarmenu">
        {" "}
        <Icon icon="iconamoon:profile-fill" className="text-[30px]" />
        <span className="lg:hidden text-[20px] ">Profile</span>
      </button>
      <button className="sidebarmenu">
        {" "}
        <Icon icon="mingcute:more-3-line" className="text-[30px]" />
        <span className="lg:hidden text-[20px] ">More</span>
      </button>
      <button className="text-white bg-[#1D9BF0] hover:bg-[#1d9cf0bb]   rounded-full px-[70px] lg:p-[10px] lg:flex lg:justify-center py-2 w-full lg:w-fit ">
        {" "}
        <span className="lg:hidden">Tweet</span>
        <Icon
          className="2xl:hidden lg:block lg:text-[20px]"
          icon="fa-solid:feather-alt"
        />
      </button>
    </div>
  );
};

export default SideBarMenu;
