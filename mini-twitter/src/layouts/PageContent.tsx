import { Switch, Route } from "react-router-dom";

//Pages
import { Home } from "../pages/Home";
import SignUpPage from "../pages/SignUpPage";
import LoginPage from "../pages/LoginPage";

const PageContent: React.FC = () => {
  return (
    <div>
      <Switch>
        <Route path="/signup">
          <SignUpPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default PageContent;
