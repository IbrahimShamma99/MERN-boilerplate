import React from 'react';
import Image from './Image';

class images extends React.Component{
    
    render(){
        return(
    <div class="row-img justify-content-start">
        <div class="column">
            <Image description="castle" name="castle.jpg" />
            <Image description="view" name="rareview.jpg"/>
        </div>
        <div class="column">
            <Image description="Old amman" name="Amman.jpg"/>
            <Image description="Hashmi" name="hashmi.jpg"/>
        </div>
        <div class="column">
            <Image description="Romans" name="RomanTheatre.jpg"/>
            <Image description="DownTown Amman" name="DowntownGJU.jpg"/>
        </div>
        <div class="column">
            <Image description="Stairs" name="stair.jpg"/>
            <Image description="View" name="view.jpg"/>
        </div> 
        <div class="column">
            <Image  description="Stairs" name="old.jpg"/>
            <Image  description="Stairs" name="musdar.jpg"/>
        </div> 
    </div>
    )}
}

export default images;
