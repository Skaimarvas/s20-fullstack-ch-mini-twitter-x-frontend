//Layouts
import Footer from "./Footer";
//Components
import SearchBar from "../components/SearchBar";
import Trends from "../components/Trends";
import Suggestion from "../components/Suggestion";

/**Notes:
 * Search Bar can be made as a component (Done)
 *
 */
const SidebarRight: React.FC = () => {
  return (
    <div className="border-l border-gray-300  ">
      <div className="flex flex-col gap-2 pt-4 pl-8  sticky right-0 top-0 lg:hidden">
        <SearchBar />
        <Trends />
        <Suggestion />
        <Footer />
      </div>
    </div>
  );
};
export default SidebarRight;
