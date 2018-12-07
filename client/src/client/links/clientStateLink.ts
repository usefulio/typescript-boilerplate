import { withClientState } from "apollo-link-state";

import cache from "../cache";
import defaults from "../defaults";
import resolvers from "../resolvers";

export default withClientState({ cache, defaults, resolvers });
