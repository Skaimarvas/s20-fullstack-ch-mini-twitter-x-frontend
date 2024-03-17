import React from "react";

import { Redirect, RouteProps } from "react-router-dom";

interface PrivateRouteProps extends Omit<RouteProps, "component"> {
  component: React.ComponentType<any>;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
}) => {
  const isUserLogin = localStorage.getItem("user");

  return isUserLogin ? (
    <>
      <Component />
    </>
  ) : (
    <Redirect to={{ pathname: "/login" }} />
  );
};

export default PrivateRoute;
