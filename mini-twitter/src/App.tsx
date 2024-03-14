import "./App.css";

//Layouts
import { Sidebar } from "./layouts/Sidebar";
import { SidebarRight } from "./layouts/SidebarRight";
import { MainSection } from "./layouts/MainSection";

function App() {
  return (
    <>
      <div className="flex flex-row justify-center">
        <Sidebar />

        <MainSection />

        <SidebarRight />
      </div>
    </>
  );
}

export default App;
