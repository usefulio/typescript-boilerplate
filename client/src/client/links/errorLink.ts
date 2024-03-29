import { onError } from "apollo-link-error";

export default onError(({ graphQLErrors, networkError, operation }) => {
  if (graphQLErrors) {
    console.log("GraphQL Error:", graphQLErrors, operation);
  }
  if (networkError) {
    console.log("Network error:", networkError, operation);
  }
});
