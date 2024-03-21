import React from "react";
//Icon
import { Icon } from "@iconify/react";
//Png
import gamer from "../assets/gamer.png";

const Profile: React.FC = () => {
  return (
    <div className="flex items-center justify-between">
      {" "}
      <div className="flex items-center gap-1">
        <img src={gamer} alt="" className="rounded-full h-10 w-10" />
        <div className="flex flex-col gap-1">
          <span className="font-bold">Kaim Arvas</span>
          <span className="text-sm text-gray-500">@kaim_arvas</span>
        </div>
      </div>
      <Icon icon="icon-park-outline:more" className="text-[30px]" />
    </div>
  );
};
export default Profile;
