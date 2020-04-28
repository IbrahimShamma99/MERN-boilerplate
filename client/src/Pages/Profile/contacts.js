import React from 'react';
import linkedin from '../../img/linkedin.png';
import pinterest from '../../img/pinterest.svg';
import github from '../../img/github.png';
import dev from "../../img/dev-brands.png";
import portfolio from "../../img/user-circle-solid.svg";
import twitter from '../../img/twitter.svg';

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
    console.log(path)
    return (
        <div class="col">
        <a href={props.contact.path}><img alt={props.contact.platform} src={path}></img></a>
        </div>
    )
};

export default contactLogo;