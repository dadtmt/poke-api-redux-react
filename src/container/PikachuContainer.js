import React, { Component } from "react";
import { fetchPikachu } from "../api";
import Pokemon from "../component/Pokemon";
import { connect } from "react-redux";
import { makePikachuReceived } from "../actions/action";

const mapStateToProps = state => ({
  ...state.pokemon,
  loading: state.pokemon.name === undefined //tmp
});

const mapDispatchToProps = dispatch => ({
  receivedPikachu: response => dispatch(makePikachuReceived(response))
});

class Pikachu extends Component {
  componentDidMount() {
    fetchPikachu().then(pikachu => this.props.receivedPikachu(pikachu));
  }
  render() {
    return (
      <div>
        {this.props.loading ? <p>Loading</p> : <Pokemon {...this.props} />}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pikachu);
