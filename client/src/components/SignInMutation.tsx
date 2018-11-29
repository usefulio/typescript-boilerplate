import { Mutation } from "react-apollo";

import {
  signIn as SignInData,
  signInVariables as SignInVariables,
} from "../types/signIn";

export class SignInMutation extends Mutation<SignInData, SignInVariables> {}
