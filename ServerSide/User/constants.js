const Routes = {
  base: "/",
  AddUser: "/register",
  Login: "/login",
  Logout: "/logout",
  user: "/users/:user",
  update: "/update/:user",
  follow: "/follow",
  admin: "/admin",
};

const params = {
  user: "user",
};

module.exports = { Routes, params };
