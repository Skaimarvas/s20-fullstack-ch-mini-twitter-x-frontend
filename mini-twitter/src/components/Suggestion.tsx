import React from "react";
//Pngs
import avatar1 from "../assets/avatar/avatar1.png";
import avatar2 from "../assets/avatar/avatar2.png";
//Components
import ProfileCard from "./ProfileCard";

const Suggestion: React.FC = () => {
  return (
    <div className="flex flex-col bg-gray-100 rounded-md p-2 gap-5">
      <div className="flex justify-between items-center">
        <h2 className="text-[18px] font-bold">You might like</h2>
      </div>
      <div className="flex flex-col gap-3">
        <ProfileCard avatar={avatar1} />
        <ProfileCard avatar={avatar2} />
      </div>
      <div className="flex justify-start">
        <span className="text-sm text-[#1DA1F2]">Show More</span>
      </div>
    </div>
  );
};
export default Suggestion;
