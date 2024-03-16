import { Switch, Route } from "react-router-dom";
//Pages
import { Home } from "../pages/Home";
import SignUpPage from "../pages/SignUpPage";

export const PageContent: React.FC = () => {
  return (
    <div>
      <Switch>
        <Route path="/signup" exact>
          <SignUpPage />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
