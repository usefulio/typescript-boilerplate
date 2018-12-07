import { Mutation } from "react-apollo";

import { SignIn } from "../types";

export class SignInMutation extends Mutation<
  SignIn.Mutation,
  SignIn.Variables
> {}
