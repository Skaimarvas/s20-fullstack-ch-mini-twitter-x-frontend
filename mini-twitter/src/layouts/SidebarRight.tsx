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
    <div className="flex flex-col gap-2 pt-4 pl-8 border-l border-gray-300">
      <SearchBar />
      <Trends />
      <Suggestion />
      <Footer />
    </div>
  );
};
export default SidebarRight;
