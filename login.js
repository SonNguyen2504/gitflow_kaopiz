function login(username, password) {
  if (!username || !password) {
    return "Missing credentials!";
  }
  if (username === "admin" && password === "123") {
    return "Login success!";
  }
  return "Login failed!";
}
