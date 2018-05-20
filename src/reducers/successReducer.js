import { actionTypes } from '../actions';

/**
* @function successReducer
* @param {array} state - Array of guessed words.
* @param {object} action - action to be reduced.
* @returns {object} - new success state
*/

export default function (state=false, action) {
  switch(action.type) {
    case(actionTypes.CORRECT_GUESS):
      return true;
    case(actionTypes.RESET_SUCCESS):
      return false;
    default:
      return state;
  }
}
