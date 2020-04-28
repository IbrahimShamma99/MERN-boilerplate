import React from 'react';
import Button from "react-bootstrap/Button";

const intro = (props)=>(
    <React.StrictMode>
    <body className="background1">
        <div>
        <h1>Find Pics here</h1>
        <h3>Start now</h3>
        {props.renderRedirect()}
        <Button onClick={props.Registerredirect} variant="register">Signup</Button>
        <Button onClick={props.Loginredirect} variant="login">Login</Button>
        </div>
    </body>
    <body className="background2">
        <div>
            <h1>Find Pics here</h1>
        </div>
    </body>
    <body className="background3">
    <div>
        <h1>Good luck</h1>
    </div>
    </body>
    </React.StrictMode>
);

export default intro;