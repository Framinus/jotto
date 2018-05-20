import { combineReducers } from 'redux';
import success from './successReducer';
import guessedWords from './guessedWordsReducer';
import secretWord from './secretWordReducer';
import totalGuesses from './totalGuessesReducer';

export default combineReducers({
  success,
  guessedWords,
  secretWord,
  totalGuesses,
});
