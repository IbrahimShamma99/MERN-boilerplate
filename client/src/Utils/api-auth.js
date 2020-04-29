import apiNames from "../constants/server";
import axios from 'axios';

const login = (DATA) => {
  return fetch(apiNames.serverDev + "/login/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
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
  return axios.post(apiNames.serverDev +"/upload", file, {})
    .then(res => { // then print response status
      console.log(res.file)
    })
};

export { login, logout, register,uploadAvatar };
