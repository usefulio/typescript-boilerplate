import gql from "graphql-tag";
import * as React from "react";

// Components.
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import TextField from "@material-ui/core/TextField";
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from "@material-ui/core/styles";
import { SignInMutation } from "../components/SignInMutation";

// Other.
import sha256 from "../lib/sha256";
import app from "../lib/app";
import SIGNIN_MUTATION from "../graphql/signInMutation.gql";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
    },
    form: {
      display: "flex",
      flexDirection: "column",
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 240,
    },
    button: {
      margin: theme.spacing.unit,
      marginTop: theme.spacing.unit * 3,
      width: 240,
    },
  });

export interface LoginProps extends WithStyles<typeof styles> {}

class SignIn extends React.Component<LoginProps> {
  state = {
    email: "luke.jagodzinski@gmail.com",
    password: "password",
    hasError: false,
    error: "",
  };

  onChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  onSnackbarClose = () => {
    this.setState({
      hasError: false,
      error: "",
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <SignInMutation mutation={SIGNIN_MUTATION}>
        {signIn => (
          <div className={classes.root}>
            <form
              className={classes.form}
              onSubmit={async event => {
                event.preventDefault();
                const { email, password } = this.state;
                try {
                  const result = await signIn({
                    variables: { email, password: sha256(password) },
                  });
                  if (result) {
                    app.signIn(result.data.token);
                  }
                } catch (error) {
                  this.setState({
                    hasError: true,
                    error: error.message,
                  });
                }
              }}
            >
              <TextField
                label="E-mail"
                className={classes.textField}
                value={this.state.email}
                onChange={this.onChange("email")}
              />
              <TextField
                type="password"
                label="Password"
                className={classes.textField}
                value={this.state.password}
                onChange={this.onChange("password")}
                autoComplete="current-password"
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Sign In
              </Button>
            </form>
            <Snackbar
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              open={this.state.hasError}
              onClose={this.onSnackbarClose}
              autoHideDuration={2000}
              message={this.state.error}
            />
          </div>
        )}
      </SignInMutation>
    );
  }
}

const WrappedLogin = withStyles(styles)(SignIn);

export { WrappedLogin as SignIn };
