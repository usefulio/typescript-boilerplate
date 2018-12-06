import { Query } from "react-apollo";

import { user as UserData } from "../types/user";

export class UserQuery extends Query<UserData> {}
