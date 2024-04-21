import React from "react";
import { Route, Switch } from "react-router-dom";
import TweetFlow from "../components/TweetFlow";
import Tweet from "../components/Tweet";

const TweetPageContent: React.FC = () => {
  return (
    <Switch>
      <Route path="/tweet/:id" exact>
        <Tweet />
      </Route>
      <Route path="/" exact>
        <TweetFlow />
      </Route>
    </Switch>
  );
};

export default TweetPageContent;
