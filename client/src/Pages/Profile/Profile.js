import React from "react";
import "./Profile.css";
import { Breakpoint } from "react-socks";
import ContactLogo from "./contacts";
// import RouteNames from "../../constants/routes";
import { connect } from "react-redux";
import auth from "../../Utils/auth-helper";
import * as actionTypes from "../../store/actions";

const mapStatetoProps = (state) => {
  return {
    ...state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (username) => {
      dispatch({ type: actionTypes.USERNAME_FETCH, username });
    },
    refresh: () => dispatch({ type: actionTypes.REFRESH }),
  };
};

class Profile extends React.Component {
  componentWillMount() {
    this.props.refresh();
    this.props.fetchUser(this.props.match.params.user);
  }

  render() {
    return (
      <div className="container">
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

        <Breakpoint medium up>
          {/** Desktop & Tablet version */}
          <div className="profile-container">
            {
              //FIXME
            }
            {this.props.profile.avatar ? (
              this.props.profile.avatar.filename ? (
                <div class="view overlay zoom">
                <img
                  className="profile-picture"
                  alt="profile"
                  src={
                    "http://localhost:5000/" +
                    this.props.profile.avatar.filename
                  }
                ></img>
                </div>
              ) : (
                <img
                  className="profile-picture"
                  alt="profile"
                  src={require("../../logos/profile.jpg")}
                ></img>
              )
            ) : null}
            <div className="username-container">
              <span>
                <h3>
                  {this.props.profile.first_name} <br />
                  {this.props.profile.last_name}
                </h3>
              </span>
              <p>{this.props.profile.bio}</p>
              {auth.isAuthenticated() &&
              this.props._id === this.props.profile._id ? (
                <div className="username-container-button">
                  <a href={"/" + this.props.username + "/update"}>
                    <button className="btn btn-danger">Edit Profile</button>
                  </a>
                </div>
              ) : null}
              <div className="contacts-container">
                <div className="row">
                  {this.props.profile.contacts
                    ? this.props.profile.contacts.map((contact) => {
                        return <ContactLogo contact={contact} />;
                      })
                    : null}
                </div>
              </div>
            </div>
            <div className="info-container">
              <h5 className="info-attribute">Location</h5>
              <h4>{this.props.profile.location}</h4>
              <h5 className="info-attribute">Interests</h5>
              <h4>
              {this.props.profile.interests ?
                this.props.profile.interests.map(intr=>(
                  intr        
                )): null}
                </h4>
              <h5 className="info-attribute">Email</h5>
              <h4>{this.props.profile.email}</h4>
            </div>
          </div>
        </Breakpoint>
        <Breakpoint small down>
          <div className="mobile-profile-container container-fluid">
            {this.props.profile ? (
              <img
                className="mobile-profile-picture"
                alt="profile"
                src={{ uri: "https://localhost:5000/1589683215388-cat.jpg" }}
              ></img>
            ) : (
              <img
                className="mobile-profile-picture"
                alt="profile"
                src={require("../../logos/profile.jpg")}
              ></img>
            )}
            <div className="mobile-username-container">
              <span>
                <h3>
                  {this.props.profile.first_name} <br />
                  {this.props.profile.last_name}
                </h3>
              </span>
              <p> {this.props.profile.bio} </p>

              <div className="mobile-contacts-container">
                <div className="row">
                  <div className="col">
                    <a href="/">
                      <img
                        alt="pinterest"
                        src={require("../../logos/pinterest.svg")}
                      ></img>
                    </a>
                  </div>

                  <div className="col">
                    <a href="/">
                      <img
                        alt="github"
                        src={require("../../logos/github.png")}
                      ></img>
                    </a>
                  </div>

                  <div className="col">
                    <a href="/">
                      <img
                        alt="dev"
                        src={require("../../logos/dev-brands.png")}
                      ></img>
                    </a>
                  </div>

                  <div className="col">
                    <a href="/">
                      <img
                        alt="twitter"
                        src={require("../../logos/twitter.svg")}
                      ></img>
                    </a>
                  </div>

                  <div className="col">
                    <a href="/">
                      <img
                        alt="linkedin"
                        src={require("../../logos/linkedin.png")}
                      ></img>
                    </a>
                  </div>

                  <div className="col">
                    <a href="/">
                      <img
                        alt="user"
                        src={require("../../logos/user-circle-solid.svg")}
                      ></img>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mobile-info-container">
              <h5 className="mobile-info-attribute">Location</h5>
              <h4>{this.props.profile.location}</h4>
              <h5 className="mobile-info-attribute">Interests</h5>
              <h4>
                {this.props.profile.interests[0]} ,{" "}
                {this.props.profile.interests[1]},
                <br />
                {this.props.profile.interests[2]},
                {this.props.profile.interests[3]}
                <br />
              </h4>
              <h5 className="mobile-info-attribute">Email</h5>
              <h4>{this.props.profile.email}</h4>
            </div>
          </div>
        </Breakpoint>
      </div>
    );
  }
}
export default connect(mapStatetoProps, mapDispatchToProps)(Profile);
