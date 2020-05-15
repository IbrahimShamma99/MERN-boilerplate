import React from "react";
import "./Update.css";
import auth from "../../Utils/auth-helper";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";
import Button from "react-bootstrap/Button";

const mapStateToProps = (state) => {
  const RegisterState = {
    email: state.email,
    _id: state._id,
    first_name: state.first_name,
    last_name: state.last_name,
    bio: state.bio,
    password: state.password,
    open: state.open,
    error: state.error,
    show: state.show,
    submitted: state.submitted,
    avatar: state.avatar,
    profile:state.profile
  };
  return RegisterState;
};

const mapDispatchToProps = (dispatch) => {
  return {
    change: (name, value) =>
      dispatch({ type: actionTypes.MODIFY, name, value }),
    submit: (Data, avatar) =>
      dispatch({ type: actionTypes.UPDATE, Data, avatar }),
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
      avatar: this.props.avatar,
      password: this.props.password,
    },
  };
  componentWillMount() {
      return true;
    
  }
  componentDidMount() {
    this.props.InitState();
  }
  onChangeHandler = (name) => (event) => {
    if (name === "avatar") {
      return this.setState({
        user: {
          ...this.state.user,
          [name]: event.target.files,
        },
      });
    }
    console.log(this.state);
    return this.setState({
      user: {
        ...this.state.user,
        [name]: event.target.value,
      },
    });
  };
  clickSubmit = () => {
    console.log("state=", this.state);
    console.log("this.state.user.avatar=", this.state.user.avatar);
    return this.props.submit(this.state, this.state.user.avatar);
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
            value={this.state.user.username}
            onChange={this.onChangeHandler("username")}
            type="text"
            id="First"
            name="First"
          ></input>
          <br />

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
