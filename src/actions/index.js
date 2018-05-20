import axios from 'axios';
import { getLetterMatchCount } from '../helpers';

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
  CLEAR_GUESSED_WORDS: 'CLEAR_GUESSED_WORDS',
  SET_SECRET_WORD: 'SET_SECRET_WORD',
  SET_TOTAL_GUESSES: 'SET_TOTAL_GUESSES',
  CLEAR_TOTAL_GUESSES: 'CLEAR_TOTAL_GUESSES',
  RESET_SUCCESS: 'RESET_SUCCESS',
};

/**
* Returns Thunk function that dispatches GUESS_WORD action and (conditionally) CORRECT_GUESS action.
* @function guessWord
* @param {string} guessedWord - Guessed word.
* @returns {function} - Redux Thunk function.
*/

export function guessWord(guessedWord) {
  return function(dispatch, getState) {
    const secretWord = getState().secretWord;
    const totalGuessCount = getState().totalGuesses;
    const newGuessCount = totalGuessCount + 1;
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

    dispatch({
      type: actionTypes.GUESS_WORD,
      payload: { guessedWord, letterMatchCount, newGuessCount }
    });

    dispatch({
      type: actionTypes.SET_TOTAL_GUESSES,
      payload: newGuessCount,
    });

    if (guessedWord === secretWord) {
      dispatch({
        type: actionTypes.CORRECT_GUESS
      });
    }
  };
};

/**
* @function resetGame
*
* @returns {function} Redux Thunk function
*/

export function resetGame() {
  return function(dispatch) {
    // resets success to false.
    dispatch({
      type: actionTypes.RESET_SUCCESS,
    });
    // resets guessedWords to empty array.
    dispatch({
      type: actionTypes.CLEAR_GUESSED_WORDS,
    });
    // resets totalGuesses to 0.
    dispatch({
      type: actionTypes.CLEAR_TOTAL_GUESSES,
    });
  }
};


/**
* @function getSecretWord
* @returns {object}
*/

export function getSecretWord() {
  return (dispatch) => {
    return axios.get('http://localhost:3030')
      .then(response => {
        dispatch({
          type: actionTypes.SET_SECRET_WORD,
          payload: response.data,
        })
      })
  }
};
