import { useState } from "react";
import "./App.css";

import Sidebar from "./layouts/Sidebar";
import SidebarRight from "./layouts/SidebarRight";

function App() {
  return (
    <>
      <div className="flex flex-row gap-5 justify-center">
        <Sidebar />
        Deneme
        <SidebarRight />
      </div>
    </>
  );
}

export default App;
