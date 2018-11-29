import * as React from "react";
import { ApolloError } from "apollo-client";

// Components.
import { Typography } from "@material-ui/core";

export interface ErrorProps {
  error: ApolloError;
}

export class Error extends React.Component<ErrorProps> {
  render() {
    return <Typography color="inherit">{this.props.error.message}</Typography>;
  }
}
