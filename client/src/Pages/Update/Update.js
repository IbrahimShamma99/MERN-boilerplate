import React from "react";
import "./Update.css";
import auth from "../../Utils/auth-helper";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";
import Button from "react-bootstrap/Button";

const mapStateToProps = (state) => {
  const RegisterState = {
    email: state.email,
    _id:state._id,
    first_name: state.first_name,
    last_name: state.last_name,
    bio:state.bio,
    password: state.password,
    open: state.open,
    error: state.error,
    show: state.show,
    submitted: state.submitted,
  };
  return RegisterState;
};

const mapDispatchToProps = (dispatch) => {
  return {
    change: (name, value) =>
      dispatch({ type: actionTypes.MODIFY, name, value }),
    submit: (Data) => dispatch({ type: actionTypes.UPDATE,Data}),
    InitState:() => dispatch({type:actionTypes.REFRESH})
  };
};

class Update extends React.Component {
  state = {
      user:{
        email: this.props.email,
        _id:this.props._id,
        first_name: this.props.first_name,
        last_name: this.props.last_name,
        bio: this.props.bio,
        password: this.props.password,
      }
  };
  componentWillMount() {
    if (auth.isAuthenticated()) {
      console.log("auth");
      return true;
    } else {
      console.log("No auth");
      return false;
    }
  }
  componentDidMount() {
    this.props.InitState();
  };
  onChangeHandler = (name) => (event) => {
    console.log(this.state);
    this.setState({ 
        user: {
            ...this.state.user,
            [name]: event.target.value 
        } 
    });
  };
  clickSubmit =()=> {
      console.log("props=",this.props)
    return this.props.submit(this.state);
  }
  onChangeAvatar(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('myfile',e.target.files);

}

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
          <input type="file" className="custom-file-input" 
          name="avatar" onChange= {this.onChangeAvatar} />

          <Button
            size="md"
            /*style={}*/ variant="flat"
            onClick={this.clickSubmit}>
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Update);
