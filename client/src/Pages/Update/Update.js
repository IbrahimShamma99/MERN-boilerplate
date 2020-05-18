import React from "react";
import "./Update.css";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";
import Button from "react-bootstrap/Button";
import { uploadAvatar } from "../../Utils/api-auth";

const mapStateToProps = (state) => {
  const RegisterState = {
    email: state.email,
    _id: state._id,
    first_name: state.first_name,
    last_name: state.last_name,
    username: state.username,
    bio: state.bio,
    birth_date:state.birth_date,
    password: state.password,
    open: state.open,
    error: state.error,
    show: state.show,
    submitted: state.submitted,
    avatar: state.avatar,
    profile: state.profile,
  };
  return RegisterState;
};

const mapDispatchToProps = (dispatch) => {
  return {
    change: (name, value) =>
      dispatch({ type: actionTypes.MODIFY, name, value }),
    submit: (Data) => dispatch({ type: actionTypes.UPDATE, Data }),
    InitState: () => dispatch({ type: actionTypes.REFRESH }),
  };
};

class Update extends React.Component {
  state = {
    user: {
      email: this.props.email,
      _id: this.props._id,
      first_name: this.props.first_name,
      last_name: this.props.last_name,
      username: this.props.username,
      bio: this.props.bio,
      birth_date:this.props.birth_date,
      password: this.props.password,
    },
    avatar: this.props.avatar,
  };
  componentWillMount() {
    return true;
  }
  componentDidMount() {
    this.props.InitState();
  }
  onChangeHandler = (name) => (event) => {
    event.preventDefault();
    if (name === "avatar") {
      return this.setState({
        avatar: event.target.files[0],
      });
    }
    return this.setState({
      user: {
        ...this.state.user,
        [name]: event.target.value,
      },
    });
  };
  clickSubmit = (e) => {
    e.preventDefault();
    uploadAvatar(this.state.user._id, this.state.avatar);
    return this.props.submit(this.state);
  };
  render() {
    return (
      <div className="update-container">
        <form>
          {this.props.show ? (
            <div className="alert">
              <span
                className="closebtn"
                onClick="this.parentElement.style.display='none';"
              >
                &times;
              </span>
              {this.props.error}
            </div>
          ) : null}

          <label htmlFor="First">First name:</label>
          <br />
          <input
            value={this.state.user.first_name}
            onChange={this.onChangeHandler("first_name")}
            type="text"
            id="First"
            name="First"
          ></input>
          <br />

          <label htmlFor="Last">Last name:</label>
          <br />
          <input
            value={this.state.user.last_name}
            onChange={this.onChangeHandler("last_name")}
            type="text"
            id="Last"
            name="Last"
          ></input>
          <br />

          <label htmlFor="Username">Username:</label>
          <br />
          <input
            value={this.state.user.username}
            onChange={this.onChangeHandler("username")}
            type="text"
            id="Username"
            name="Username"
          ></input>
          <br />

          <label htmlFor="Email">Email</label>
          <br />
          <input
            value={this.state.user.email}
            onChange={this.onChangeHandler("email")}
            type="email"
            id="Email"
            name="Email"
          ></input>
          <br />

          <label htmlFor="Password">Password</label>
          <br />
          <input
            value={this.state.user.password}
            onChange={this.onChangeHandler("password")}
            type="password"
            id="Password"
            name="Password"
          ></input>
          <br />

          <label min="1950-01-01" htmlFor="date">
            Born
          </label>
          <br />
          <input
            onChange={this.onChangeHandler("birth_date")}
            value={this.state.birth_date}
            type="date"
            id="date"
            name="date"
          ></input>
          <br />

          <label className="bio-form" htmlFor="Bio">
            Bio:
          </label>
          <br />
          <textarea
            value={this.state.user.bio}
            onChange={this.onChangeHandler("bio")}
            maxLength="60"
            type="text"
            id="Bio"
            name="Bio"
          ></textarea>
          <br />

          <label htmlFor="Pinterest">Pinterest</label>
          <br />
          <input type="url" id="Pinterest" name="Pinterest"></input>
          <br />

          <label htmlFor="LinkedIn">LinkedIn</label>
          <br />
          <input type="url" id="LinkedIn" name="LinkedIn"></input>
          <br />

          <label htmlFor="Github">Github</label>
          <br />
          <input type="url" id="Github" name="Github"></input>
          <br />
          <label htmlFor="avatar">avatar</label>

          <input
            type="file"
            className=""
            name="avatar"
            onChange={this.onChangeHandler("avatar")}
          />

          <Button size="md" variant="flat" onClick={this.clickSubmit}>
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Update);
