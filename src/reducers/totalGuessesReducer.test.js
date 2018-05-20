import { actionTypes } from '../actions';
import totalGuessesReducer from './totalGuessesReducer';

test('returns initial state when no action is passed', () => {
  const newState = totalGuessesReducer(undefined, {});
  expect(newState).toBe(0);
});

test('returns a count of 1 when the initial guess count is zero', () => {
  const originalState = 0;
  const newCount = 1;
  const newState = totalGuessesReducer(originalState, { type: actionTypes.SET_TOTAL_GUESSES, payload: newCount });
  expect(newState).toBe(1);
});

test('returns a count of 0 when the initial guess count is 1', () => {
  const initialState = 1;
  const newCount = 0;
  const newState = totalGuessesReducer(initialState, { type: actionTypes.CLEAR_TOTAL_GUESSES });
  expect(newState).toBe(0);
})
