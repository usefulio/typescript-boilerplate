import { InMemoryCache } from "apollo-cache-inmemory";

import SESSION_QUERY from "../../../graphql/sessionQuery.gql";
import { session as SessionData } from "../../../types/session";

export default function setSessionVariable(
  root,
  { name, value },
  { cache }: { cache: InMemoryCache },
) {
  const prevData = cache.readQuery<SessionData>({ query: SESSION_QUERY });
  const nextData = {
    ...prevData,
    session: {
      ...prevData.session,
    },
  };
  nextData.session[name] = value;
  cache.writeData<SessionData>({ data: nextData });
  return value;
}
