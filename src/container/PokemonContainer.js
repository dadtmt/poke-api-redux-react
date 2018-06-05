import React, { Component } from "react";
import { connect } from "react-redux";
import Pokemon from "../components/Pokemon";
import { fetchPikachu } from "../api";
import { makePikachuReceived } from "../actions/actions";

const mapStateToProps = state => ({
  pokemon: state.pokemon
});

const mapDispatchToProps = dispatch => ({
  onPokemonReceived: response => dispatch(makePikachuReceived(response))
});

class PokemonWrap extends Component {
  render() {
    return (
      <div>
        {this.props.pokemon.name ? (
          <Pokemon {...this.props.pokemon} />
        ) : (
          <div>Loading</div>
        )}
      </div>
    );
  }

  componentDidMount() {
    fetchPikachu().then(pikachu => this.props.onPokemonReceived(pikachu));
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonWrap);
