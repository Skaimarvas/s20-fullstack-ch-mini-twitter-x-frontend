//Components
import { TweetInput } from "../components/TweetInput";
import { Tweet } from "../components/Tweet";
//Layouts
import Header from "./Header";

export default function MainSection() {
  return (
    <div className=" flex flex-col items-center w-2/5">
      <Header />
      <TweetInput />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
    </div>
  );
}
