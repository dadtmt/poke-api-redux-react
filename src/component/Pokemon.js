import React from "react";

const Pokemon = ({ name, abilities }) => (
  <div>
    <h4>{name}</h4>
    {abilities.map(ability => <p>{ability.ability.name}</p>)}
  </div>
);

export default Pokemon;
