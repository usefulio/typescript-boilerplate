import getSessionVariable from "./app/getSessionVariable";
import setSessionVariable from "./app/setSessionVariable";

const app = {
  isSignedIn() {
    return this.getToken() !== null;
  },
  getToken() {
    return localStorage.getItem("token");
  },
  signIn(token: string) {
    localStorage.setItem("token", token);
    window.location.replace("/");
  },
  signOut() {
    localStorage.removeItem("token");
    window.location.reload();
  },
  getSessionVariable,
  setSessionVariable,
};

window["app"] = app;

export default app;
