//Icon
import { Icon } from "@iconify/react";
//Component
import SideBarMenu from "../components/SideBarMenu";
import Profile from "../components/Profile";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <div className="flex flex-col gap-5 pt-5 p-8 border-r border-gray-300 h-screen sticky left-0 top-0  lg:px-2 lg:items-center">
      <div className="px-2">
        <Link
          to="/"
          className="flex lg:justify-center hover:bg-gray-300 p-[10px] rounded-full hover:transition w-fit"
        >
          {" "}
          <Icon icon="logos:twitter" className="text-[30px]" />{" "}
        </Link>
      </div>
      <SideBarMenu />
      <Profile />
    </div>
  );
};

export default Sidebar;
