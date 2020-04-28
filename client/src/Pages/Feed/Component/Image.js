import React from 'react';
import './Image.css';

const image = (props) => (
        <div>
        <img className="image-view" id={props.description} alt={props.description} src={require(__dirname+"/../../../img/Jordan/"+props.name)}/>
        <div className="image-description"><p>{props.description}</p></div>
        <div className=""><p>{props.tags}</p></div>
        </div>
);

export default image;