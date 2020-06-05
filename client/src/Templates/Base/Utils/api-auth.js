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

const register = (user) => {
  return fetch(apiNames.concat("/register"), {
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

const update = (DATA) => {
  return fetch(apiNames.concat("/update/", DATA.user._id), {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Token ".concat(localStorage.getItem("jwt")),
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

const uploadAvatar = (ID, avatar) => {
  const formData = new FormData();
  formData.append("avatar", avatar);
  const config = {
    headers: {
      "content-type": "multipart/form-data",
      Authorization: "Token ".concat(localStorage.getItem("jwt")),
    },
  };
  axios.put(apiNames.concat("/update/", ID, formData, config));
};

const fetchViaUsername = (username) => {
  const QueryRoute = apiNames.concat("/fetch/", "?username=" , username);
  return fetch(QueryRoute, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
    crossdomain: true,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export {
  signout,
  login,
  logout,
  uploadAvatar,
  register,
  update,
  fetchViaUsername,
};
