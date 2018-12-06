import client from "../../client";
import SESSION_QUERY from "../../graphql/sessionQuery.gql";
import { session as SessionData } from "../../types/session";

export default async function getSessionVariable(name: string) {
  const response = await client.query<SessionData>({
    query: SESSION_QUERY,
    variables: { name },
  });
  return response.data.session[name];
}
