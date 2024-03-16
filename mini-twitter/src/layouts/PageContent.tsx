import { Switch, Route } from "react-router-dom";
//Pages
import { Home } from "../pages/Home";
import SignUpPage from "../pages/SignUpPage";

export const PageContent: React.FC = () => {
  return (
    <div>
      <Switch>
        <Route path="/signup">
          <SignUpPage />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
