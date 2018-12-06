import gql from "graphql-tag";
import * as React from "react";
import { Redirect } from "react-router-dom";

// Components.
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from "@material-ui/core/styles";
import { UserQuery } from "./UserQuery";

// Other.
import app from "../lib/app";
import USER_QUERY from "../graphql/userQuery.gql";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    button: {
      marginLeft: theme.spacing.unit * 2,
    },
  });

export interface HeaderProps extends WithStyles<typeof styles> {}

class Header extends React.Component<HeaderProps> {
  onClick = () => {
    app.signOut();
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              TypeScript React
            </Typography>
            {app.isSignedIn() && (
              <UserQuery query={USER_QUERY}>
                {({ loading, error, data }) => {
                  if (loading || error) {
                    return null;
                  }
                  return (
                    <React.Fragment>
                      <Typography color="inherit">
                        Logged in as {data.user.fullName} from{" "}
                        {data.user.organization.name}
                      </Typography>
                      <Button
                        color="inherit"
                        onClick={this.onClick}
                        className={classes.button}
                      >
                        Sign Out
                      </Button>
                    </React.Fragment>
                  );
                }}
              </UserQuery>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const WrappedHeader = withStyles(styles)(Header);

export { WrappedHeader as Header };
