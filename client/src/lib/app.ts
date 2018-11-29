const app = {
  isSignedIn() {
    return this.getToken() !== null;
  },
  getToken(from: string = null) {
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
};

export default app;
