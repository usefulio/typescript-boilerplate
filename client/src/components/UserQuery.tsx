import { Query } from "react-apollo";

import {
  user as UserData,
  userVariables as UserVariables,
} from "../types/user";

export class UserQuery extends Query<UserData, UserVariables> {}
