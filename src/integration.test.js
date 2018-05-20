import { storeFactory } from '../test/testUtils';
import { guessWord, resetGame } from './actions';

describe('guessWord action dispatcher', () => {
  const secretWord = 'party';
  const unsuccessfulGuess = 'train';
  describe('no guessed words', () => {
    let store;
    const initialState = { secretWord };
    beforeEach(() => {
      store = storeFactory(initialState);
    });
    test('updates state correctly for unsuccessful guess', () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [{
          guessedWord: unsuccessfulGuess,
          letterMatchCount: 3,
          newGuessCount: 1,
        }],
        totalGuesses: 1,
      };
      expect(newState).toEqual(expectedState);
    });
    test('updates state correctly for successful guess', () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: true,
        guessedWords: [{
          guessedWord: secretWord,
          letterMatchCount: 5,
          newGuessCount: 1,
        }],
        totalGuesses: 1,
      };
      expect(newState).toEqual(expectedState);
    });
  });
  describe('some guessed words', () => {
    const guessedWords = [{ guessedWord: 'agile', letterMatchCount: 1 }];
    const totalGuesses = 1;
    const initialState = { guessedWords, secretWord, totalGuesses };
    let store;
    beforeEach(() => {
      store = storeFactory(initialState);
    });
    test('updates state correctly for unsuccessful guess', () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const newState = store.getState();
      const expectedState = {
        secretWord,
        success: false,
        guessedWords: [...guessedWords,
          { guessedWord: unsuccessfulGuess,
            letterMatchCount: 3,
            newGuessCount: 2,
          }],
        totalGuesses: 2,
      };
      expect(newState).toEqual(expectedState);
    });
    test('updates state correctly for successful guess', () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        secretWord,
        success: true,
        guessedWords: [...guessedWords, {
          guessedWord: secretWord,
          letterMatchCount: 5,
          newGuessCount: 2,
        }],
        totalGuesses: 2,
      };
      expect(newState).toEqual(expectedState);
    });
  });
});

describe('`resetGame` action dispatcher', () => {
  const success = true;
  const guessedWords = [{ guessedWord: 'party', letterMatchCount: 5 }];
  const secretWord = 'party';
  const totalGuesses = 1;
  const initialState = { success, guessedWords, secretWord, totalGuesses };
  let store
  store = storeFactory(initialState);
  test('clears guessed words, toggles success to false, and resets guess count', () => {
    store.dispatch(resetGame());
    const newState = store.getState();
    const expectedState = {
      ...initialState,
      secretWord,
      success: false,
      guessedWords: [],
      totalGuesses: 0,
    };
    expect(newState).toEqual(expectedState);
  });
});
