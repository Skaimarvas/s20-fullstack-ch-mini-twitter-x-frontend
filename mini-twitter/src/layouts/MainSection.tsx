//Components
import TweetInput from "../components/TweetInput";
//Layouts
import Header from "./Header";
//Hooks
//Thunks
import TweetPageContent from "./TweetPageContent";

const MainSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-2/5 lg:w-3/5 md:w-5/6">
      <Header />
      <TweetInput />
      <TweetPageContent />
    </div>
  );
};

export default MainSection;
