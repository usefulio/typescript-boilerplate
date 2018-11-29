import * as React from "react";

// Components.
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from "@material-ui/core/styles";
import { Routes } from "./Routes";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing.unit * 2,
      overflow: "auto",
    },
  });

export interface ContentProps extends WithStyles<typeof styles> {}

class Content extends React.Component<ContentProps> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Routes />
      </div>
    );
  }
}

const WrappedContent = withStyles(styles)(Content);

export { WrappedContent as Content };
