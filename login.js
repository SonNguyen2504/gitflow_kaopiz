function login(username, password) {
  if (username === "admin" && password === "123") {
    return "Login success!";
  }
  return "Login failed!";
}

console.log(login("admin", "123"));
