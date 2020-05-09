import apiNames from "../constants/server";

const login = (DATA) => {
  return fetch(apiNames.serverDev + "/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    withCredentials: true,
    crossdomain: true,
    body: JSON.stringify(DATA),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

const logout = () => {
  return fetch(apiNames.serverDev + "/logout", {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

const register = (user) => {
  return fetch(apiNames.serverDev + "/register", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    withCredentials: true,
    crossdomain: true,
    body: JSON.stringify(user),
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .catch((err) => console.log(err));
};

const uploadAvatar = (file) => {
  
  return fetch(apiNames.serverDev + "/user", {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Authorization":  "Token ".concat( sessionStorage.getItem("jwt"))
    },
    withCredentials: true,
    crossdomain: true,
    file
    })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
  
};
const signout = () => {
  return fetch(apiNames.serverDev + "/logout", {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
console.log("Token ".concat(sessionStorage.getItem("jwt")))
const update = (DATA) => {
  console.log(DATA)
  return fetch(apiNames.serverDev + "/user", {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Authorization":  "Token ".concat( sessionStorage.getItem("jwt"))
    },
    withCredentials: true,
    crossdomain: true,
    body: JSON.stringify(DATA),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export { signout, login, logout, register, uploadAvatar ,update};
