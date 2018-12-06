import { withClientState } from "apollo-link-state";

import cache from "../cache";
import defaults from "../defaults";
import resolvers from "../resolvers";
import typeDefs from "../typeDefs.gql";

export default withClientState({ cache, defaults, resolvers, typeDefs });
