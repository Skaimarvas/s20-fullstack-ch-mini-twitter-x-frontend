import React from "react";
import Sidebar from "../layouts/Sidebar";
import MainSection from "../layouts/MainSection";
import SidebarRight from "../layouts/SidebarRight";

export const Home: React.FC = () => {
  return (
    <div className="flex flex-row justify-center md:justify-start">
      <Sidebar />
      <MainSection />
      <SidebarRight />
    </div>
  );
};
