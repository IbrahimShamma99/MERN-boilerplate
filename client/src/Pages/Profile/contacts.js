import React from 'react';
import linkedin from '../../logos/linkedin.png';
import pinterest from '../../logos/pinterest.svg';
import github from '../../logos/github.png';
import dev from "../../logos/dev-brands.png";
import portfolio from "../../logos/user-circle-solid.svg";
import twitter from '../../logos/twitter.svg';

const contactLogo = (props) => {
    var path;
    switch(props.contact.platform){
        case("pinterest"):
            path=pinterest;
            break;
        case("dev"):
            path=dev;
            break;
        case("github"):
            path=github;
            break;
        case("twitter"):
            path=twitter;
            break;
        case("linkedin"):
            path=linkedin;
            break;
        case("portfolio"):
            path=portfolio;
            break;
        default:
            break; 
    }
    return (
        <div className="col">
        <a href={props.contact.path}><img alt={props.contact.platform} src={path}></img></a>
        </div>
    )
};

export default contactLogo;