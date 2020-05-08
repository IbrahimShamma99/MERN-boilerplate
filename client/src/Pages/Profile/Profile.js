import React from "react";
import "./Profile.css";
import { Breakpoint } from "react-socks";
import ContactLogo from "./contacts";
import RouteNames from "../../constants/routes";
import { connect } from "react-redux";

const mapStatetoProps = (state) => {
  return {
      ...state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

class Profile extends React.Component {
  render() {
    return (
      <div className="container">
        <Breakpoint medium up>
          {/** Desktop & Tablet version */}
          <div className="profile-container">
          {console.log(this.props)}
            <img
              className="profile-picture"
              alt="profile"
              src={require("../../logos/profile.jpg")}
            ></img>
            <div className="username-container">
              <span>
                <h3>
                  {this.props.first_name} <br />
                  {this.props.last_name}
                </h3>
              </span>
              <p>{this.props.bio}</p>
              <div className="username-container-button">
                <a href={RouteNames.update}>
                  <button className="btn btn-danger">Edit Profile</button>
                </a>
              </div>
              <div className="contacts-container">
                <div className="row">
                  {this.props.contacts.map((contact) => {
                    return <ContactLogo contact={contact} />;
                  })}
                </div>
              </div>
            </div>
            <div className="info-container">
              <h5 className="info-attribute">Location</h5>
              <h4>{this.props.location}</h4>
              <h5 className="info-attribute">Interests</h5>
              <h4>
                {this.props.interests[0]} , {this.props.interests[1]},
                <br />
                {this.props.interests[2]},{this.props.interests[3]}
                <br />
              </h4>
              <h5 className="info-attribute">Email</h5>
              <h4>{this.props.email}</h4>
            </div>
          </div>
        </Breakpoint>

        <Breakpoint small down>
          <div className="mobile-profile-container container-fluid">
            <img
              className="mobile-profile-picture"
              alt="profile"
              src={require("../../logos/profile.jpg")}
            ></img>
            <div className="mobile-username-container">
              <span>
                <h3>
                  {this.props.first_name} <br />
                  {this.props.last_name}
                </h3>
              </span>
              <p> {this.props.bio} </p>

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
              <h4>{this.props.location}</h4>
              <h5 className="mobile-info-attribute">Interests</h5>
              <h4>
                Coding , coffee,
                <br />
                Deepconversations,Reading
                <br />
              </h4>
              <h5 className="mobile-info-attribute">Email</h5>
              <h4>{this.props.email}</h4>
            </div>
          </div>
        </Breakpoint>
      </div>
    );
  }
}
export default connect(mapStatetoProps,mapDispatchToProps)(Profile);
