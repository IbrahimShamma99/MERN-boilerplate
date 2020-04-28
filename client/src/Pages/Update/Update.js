import React from 'react';
import './Update.css';

class Update extends React.Component {
    
    render(){ 
        return (
            <div className="update-container">
                <form>
                    <label htmlFor="First">First name:</label><br/>
                    <input type="text" id="First" name="First"></input><br/>
                    <label htmlFor="Last">Last name:</label><br/>
                    <input type="text" id="Last" name="Last"></input><br/>

                    <label htmlFor="Email">Email</label><br/>
                    <input type="email" id="Email" name="Email"></input><br/>

                    <label htmlFor="Password">Password</label><br/>
                    <input type="password" id="Password" name="Password"></input><br/>

                    <label className="bio-form" htmlFor="Bio">Bio:</label><br/>
                    <textarea maxLength="60" type="text" id="Bio" name="Bio"></textarea><br/>

                    <label htmlFor="Pinterest">Pinterest</label><br/>
                    <input type="url" id="Pinterest" name="Pinterest"></input><br/>

                    <label htmlFor="LinkedIn">LinkedIn</label><br/>
                    <input type="url" id="LinkedIn" name="LinkedIn"></input><br/>

                    <label htmlFor="Github">Github</label><br/>
                    <input type="url" id="Github" name="Github"></input><br/>

                    <input type="file"></input><br/>
                    <input type="submit" value="update"></input>
                </form>
          </div>
        )
    }
};

export default Update;