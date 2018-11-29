import * as React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

// Other.
import app from "../lib/app";

export interface PrivateRouteProps extends RouteProps {
  redirectTo: string;
}

export class PrivateRoute extends React.Component<PrivateRouteProps> {
  render() {
    const { component: Component, redirectTo, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={props => {
          return app.isSignedIn() ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{ pathname: redirectTo, state: { from: props.location } }}
            />
          );
        }}
      />
    );
  }
}
