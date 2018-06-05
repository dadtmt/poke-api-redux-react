import React from "react";

const Pokemon = ({ name, stats }) => (
  <div>
    <h4>{name}</h4>
    <ul>{stats.map((stat, index) => <li key={index}>{stat.stat.name}</li>)}</ul>
  </div>
);

export default Pokemon;
