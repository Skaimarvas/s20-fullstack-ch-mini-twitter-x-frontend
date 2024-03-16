import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Layouts
import { PageContent } from "./layouts/PageContent";

const App: React.FC = () => {
  return (
    <>
      <PageContent />
      <ToastContainer />
    </>
  );
};

export default App;
