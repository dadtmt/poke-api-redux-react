import React, { Component } from "react";
import { fetchPikachu } from "../api";

class Pikachu extends Component {
  componentDidMount() {
    fetchPikachu().then(pikachu => console.log(pikachu));
  }
  render() {
    return <div>Pikachu</div>;
  }
}

export default Pikachu;
