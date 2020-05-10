import apiNames from "../constants/server";
import axios from 'axios';

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
const update = (DATA,avatar) => {
  const fd = new FormData();
  fd.append("user",JSON.stringify(DATA.user));
  fd.append("avatar",avatar);
  return fetch(apiNames.serverDev + "/user", {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Authorization":  "Token ".concat( sessionStorage.getItem("jwt"))
    },
    withCredentials: true,
    crossdomain: true,
    body: fd,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export { signout, login, logout, register ,update};
