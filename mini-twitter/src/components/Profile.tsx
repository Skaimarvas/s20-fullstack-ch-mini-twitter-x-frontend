import React from "react";
//Icon
import { Icon } from "@iconify/react";
//Png
import gamer from "../assets/gamer.png";

const Profile: React.FC = () => {
  return (
    <button className="flex items-center px-3 gap-5   justify-between lg:justify-center lg:p-[10px] hover:bg-gray-300  rounded-full hover:transition">
      {" "}
      <div className="flex items-center gap-1 ">
        <img src={gamer} alt="" className="rounded-full h-10 w-10" />
        <div className="2xl:flex  lg:hidden  2xl:flex-col 2xl:gap-1">
          <span className="font-bold">Kaim Arvas</span>
          <span className="text-sm text-gray-500">@kaim_arvas</span>
        </div>
      </div>
      <Icon icon="icon-park-outline:more" className="text-[30px] lg:hidden" />
    </button>
  );
};
export default Profile;
