import "./App.css";

import Sidebar from "./layouts/Sidebar";
import SidebarRight from "./layouts/SidebarRight";

function App() {
  return (
    <>
      <div className="flex flex-row gap-5 justify-center">
        <Sidebar />
        <div className="w-2/4">
          <span>Deneme</span>
        </div>
        <SidebarRight />
      </div>
    </>
  );
}

export default App;
