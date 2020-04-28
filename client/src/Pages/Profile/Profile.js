import React from 'react';
import './Profile.css';
import {Breakpoint} from 'react-socks';
import ContactLogo from './contacts';
import RouteNames from '../../constants/routes';

class Profile extends React.Component {
    state = {
        user:{
            first_name:"Ibrahim",
            last_name:"abushammah",
            bio:"Self educated JS Developer.",
            contacts:[{
                link:"/",
                platform:"linkedin"
            },{
                link:"/",
                platform:"github"
            },{
                link:"/",
                platform:"pinterest"
            },
            {
                link:"/",
                platform:"portfolio"
            },
            {
                link:"/",
                platform:"twitter"
            }],
            collections:[{}],
            interests:["Coding","coffee","Deepconversations","Reading"],
            email:"I.abushammah@gmail.com",
            location:"Amman , Jordan"
        }
    }

    render(){
        return(    
    <div className="container">
    <Breakpoint medium up>
    {/** Desktop & Tablet version */}
    <div className="profile-container">
        <img className="profile-picture" alt="profile" src={require("../../img/profile.jpg")}></img>
            <div className="username-container">

                <span><h3>{this.state.user.first_name} <br/>{this.state.user.last_name}</h3></span>
                <p>
                {this.state.user.bio}                
                </p>
                <div className="username-container-button">
                <a href={RouteNames.update}>
                <button class="btn btn-danger">
                Edit Profile
                </button></a>
                </div>
                <div className="contacts-container">
                <div className="row">
                {this.state.user.contacts.map((contact)=>
                    {
                        return (<ContactLogo contact={contact}/>)        
                    })}

                </div>                
            </div>

            </div>
            <div className="info-container">
            <h5 className="info-attribute">Location</h5>
            <h4>{this.state.user.location}</h4>
            <h5 className="info-attribute">Interests</h5>
            <h4>{this.state.user.interests[0]} , {this.state.user.interests[1]},<br/>
            {this.state.user.interests[2]},{this.state.user.interests[3]}<br/>
            </h4>
            <h5 className="info-attribute">Email</h5>
            <h4>{this.state.user.email}</h4>

        </div>
    </div>
    </Breakpoint>

    <Breakpoint small down>
    <div className="mobile-profile-container container-fluid">
    <img className="mobile-profile-picture" alt="profile" src={require("../../img/profile.jpg")}></img>
        <div className="mobile-username-container">

            <span><h3>{this.state.user.first_name} <br/>{this.state.user.last_name}</h3></span>
            <p> {this.state.user.bio} </p>
            
            <div className="mobile-contacts-container">
            <div className="row">
        
            <div class="col">
            <a href="/"><img alt="pinterest" src={require("../../img/pinterest.svg")}></img></a>
            </div>

            <div class="col">
            <a href="/"><img alt="github" src={require("../../img/github.png")}></img></a>
            </div>

            <div class="col">
            <a href="/"><img alt="dev" src={require("../../img/dev-brands.png")}></img></a>
            </div>
            
            <div class="col">
            <a href="/"><img alt="twitter" src={require("../../img/twitter.svg")}></img></a>
            </div>
            
            <div class="col">
            <a href="/"><img alt="linkedin" src={require("../../img/linkedin.png")}></img></a>
            </div>

            <div class="col">
            <a href="/"><img alt="user" src={require("../../img/user-circle-solid.svg")}></img></a>
            </div>

            </div>
        </div>

        </div>
        <div className="mobile-info-container">
        <h5 className="mobile-info-attribute">Location</h5>
        <h4>{this.state.user.location}</h4>
        <h5 className="mobile-info-attribute">Interests</h5>
        <h4>Coding , coffee,<br/>
        Deepconversations,Reading<br/>
        </h4>
        <h5 className="mobile-info-attribute">Email</h5>
        <h4>{this.state.user.email}</h4>

        </div>
    </div>
    </Breakpoint>




    </div>
        );
    }
}
export default Profile;