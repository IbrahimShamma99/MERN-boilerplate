import React from 'react';
import './Update.css';
import auth from '../../Utils/auth-helper';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions';
import Button from "react-bootstrap/Button";

const mapStateToProps = (state) => {
    const RegisterState = {
      email: state.email,
      first_name: state.first_name,
      last_name: state.last_name,
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
      change: (name, value) =>dispatch({ type: actionTypes.MODIFY, name, value }),
      submit: () => dispatch({ type: actionTypes.UPDATE }),
    };
  };
  
class Update extends React.Component {
    state = {
        email: this.props.email,
        first_name: this.props.first_name,
        last_name: this.props.last_name,
        password: this.props.password          
    };    
    componentWillMount(){
        if(auth.isAuthenticated()){
            console.log("auth")
            return true;
        }
        else {
            console.log("No auth");
            return false;
        }
    }
    componentDidMount(){
        console.log(sessionStorage)
    }
    onChangeHandler = name => event => {
        console.log(this.state)
        this.setState({[name]:event.target.value})
    }
    clickSubmit() {}
    render(){ 
        return (
            <div className="update-container">
                <form>
                    <label htmlFor="First">First name:</label><br/>
                    <input value={this.state.first_name} onChange={this.onChangeHandler('first_name')} type="text" id="First" name="First"></input><br/>
                    
                    <label htmlFor="Last">Last name:</label><br/>
                    <input value={this.state.last_name} onChange={this.onChangeHandler('last_name')} type="text" id="Last" name="Last"></input><br/>

                    <label htmlFor="Email">Email</label><br/>
                    <input value={this.state.email} onChange={this.onChangeHandler('email')} type="email" id="Email" name="Email"></input><br/>

                    <label htmlFor="Password">Password</label><br/>
                    <input value={this.state.password} onChange={this.onChangeHandler('password')} type="password" id="Password" name="Password"></input><br/>

                    <label className="bio-form" htmlFor="Bio">Bio:</label><br/>
                    <textarea value={this.state.bio} onChange={this.onChangeHandler('bio')} maxLength="60" type="text" id="Bio" name="Bio"></textarea><br/>

                    <label htmlFor="Pinterest">Pinterest</label><br/>
                    <input type="url" id="Pinterest" name="Pinterest"></input><br/>

                    <label htmlFor="LinkedIn">LinkedIn</label><br/>
                    <input type="url" id="LinkedIn" name="LinkedIn"></input><br/>

                    <label htmlFor="Github">Github</label><br/>
                    <input type="url" id="Github" name="Github"></input><br/>

                    <Button
                    size="md"
                    /*style={}*/ variant="flat"
                    onClick={this.clickSubmit}
                    >
                    Submit
                    </Button>
                </form>
            </div>
        )
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Update);