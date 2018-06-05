import { PIKACHU_RECEIVED } from "../actions/actions";

const initialState = {};

const pokemon = (prevState = initialState, action) => {
  if (action.type === PIKACHU_RECEIVED) {
    return action.response;
  }
  return prevState;
};

export default pokemon;
