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
