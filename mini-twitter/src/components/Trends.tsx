import React from "react";
//Icon
import { Icon } from "@iconify/react";

const Trends: React.FC = () => {
  return (
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
  );
};
export default Trends;
