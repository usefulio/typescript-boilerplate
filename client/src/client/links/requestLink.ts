import { ApolloLink, Observable } from "apollo-link";
import app from "../../lib/app";

export default new ApolloLink(
  (operation, forward, ...rest) =>
    new Observable(observer => {
      let handle;
      Promise.resolve(operation)
        .then(operation => {
          const token = app.getToken("requestLink");
          const headers = {};
          if (token) {
            headers["Authorization"] = `Bearer ${token}`;
          }
          operation.setContext({ headers });
        })
        .then(() => {
          handle = forward(operation).subscribe({
            next: observer.next.bind(observer),
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer),
          });
        })
        .catch(observer.error.bind(observer));
      return () => {
        if (handle) {
          handle.unsubscribe();
        }
      };
    }),
);
