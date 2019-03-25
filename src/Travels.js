import React from "react";

const Travels = ({ destination, country, photo, distance })=> (
  <figure>
    <img
      src={photo} alt={country} width="50%"/>
    <figcaption>
      <h2>{destination}</h2>
      <h3>{country}</h3>
      <h3>{distance}</h3>
    </figcaption>
  </figure>
);

export default Travels;