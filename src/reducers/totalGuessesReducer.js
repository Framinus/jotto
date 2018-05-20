import { actionTypes } from '../actions';

/**
* @function totalGuesses
* @param state - the current state.
* @param action - the action object
* @returns {number} - the new state.
*/

export default function (state=0, action) {
  switch(action.type) {
    case(actionTypes.SET_TOTAL_GUESSES):
      return action.payload;
    case(actionTypes.CLEAR_TOTAL_GUESSES):
      return 0;
    default:
      return state;
  }
};
