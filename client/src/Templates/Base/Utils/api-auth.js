import apiNames from "../../constants/server";
import axios from "axios";

const login = (DATA) => {
  return fetch(apiNames.concat("/login"), {
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
  return fetch(apiNames.concat("/logout"), {
    method: "GET",
    body: JSON.stringify({}),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

const signout = () => {
  return fetch(apiNames.concat("/logout"), {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export { signout, login, logout };
