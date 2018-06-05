import { PIKACHU_RECEIVED } from "../actions/action";

const pokemon = (prevState = null, action) => {
  if (action.type === PIKACHU_RECEIVED) {
    return action.response;
  }
  return prevState;
};

export default pokemon;