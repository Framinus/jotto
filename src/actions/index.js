export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
};

/**
* Returns Thunk function that dispatches GUESS_WORD action and (conditionally) CORRECT_GUESS action.
* @function guessWord
* @param {string} guessedWord - Guessed word.
* @returns {function} - Redux Thunk function.
*/

export function guessWord(guessedWord) {
  return function(dispatch, getState) {
    
  };
};
