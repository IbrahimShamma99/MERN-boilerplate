import React from "react";
import "./Update.css";
import * as actionTypes from "../../Store/user.actions";
import Button from "react-bootstrap/Button";
import { uploadAvatar } from "../../Utils/api-auth";


class Update extends React.Component {
  state = {};
  componentWillMount() {}
  componentDidMount() {}
  onChangeHandler = (name) => (event) => {};
  clickSubmit = (e) => {};
  render() {
    return <div className="update-container"></div>;
  }
}

export default Update;
