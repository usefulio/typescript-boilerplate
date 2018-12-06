import client from "../../client";
import SET_SESSION_VARIABLE_MUTATION from "../../graphql/setSessionVariableMutation.gql";
import { setSessionVariableVariables as SetSessionVariableVariables } from "../../types/setSessionVariable";

export default async function setSessionVariable(name: string, value: string) {
  await client.mutate<{}, SetSessionVariableVariables>({
    mutation: SET_SESSION_VARIABLE_MUTATION,
    variables: { name, value },
  });
}
