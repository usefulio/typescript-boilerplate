import * as React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

// Other.
import app from "../lib/app";

export interface SignInRouteProps extends RouteProps {
  redirectTo: string;
}

export class SignInRoute extends React.Component<SignInRouteProps> {
  render() {
    const { component: Component, redirectTo, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={props => {
          return app.isSignedIn() ? (
            <Redirect
              to={{ pathname: redirectTo, state: { from: props.location } }}
            />
          ) : (
            <Component {...props} />
          );
        }}
      />
    );
  }
}
