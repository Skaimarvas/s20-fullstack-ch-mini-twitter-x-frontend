//Icon
import { Icon } from "@iconify/react";
//Component
import SideBarMenu from "../components/SideBarMenu";
import Profile from "../components/Profile";

const Sidebar: React.FC = () => {
  return (
    <div className="flex flex-col gap-10 pt-5 pr-8 border-r border-gray-300 ">
      <div>
        {" "}
        <Icon icon="logos:twitter" className="text-[40px]" />{" "}
      </div>
      <SideBarMenu />
      <Profile />
    </div>
  );
};

export default Sidebar;
