import React from "react";

const Travel = ({destination, country, photo, distance, alt})=> {
    return (
        <div>
        <p></p>
        <img src={photo} alt={alt} width="50%"/>
        <h2>{destination}, {country}</h2>
        <p>{distance}</p>
    </div>
    )
}


export default Travel;