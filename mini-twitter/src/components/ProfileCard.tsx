import React from "react";

interface ProfileCardProps {
  avatar: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ avatar }) => {
  return (
    <div className="flex justify-between">
      <div className="flex ">
        <div>
          <img src={avatar} alt="" className="h-12 w-12 rounded-full" />
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
  );
};
export default ProfileCard;
