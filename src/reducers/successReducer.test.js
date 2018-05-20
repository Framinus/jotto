import { actionTypes } from '../actions';
import successReducer from './successReducer';

test('returns default initial state of `false` when no action is passed', () => {
  const newState = successReducer(undefined, {});
  expect(newState).toBe(false);
});

test('returns state of true upon receiving an action of type `CORRECT_GUESS`', () => {
  const newState = successReducer(undefined, { type: actionTypes.CORRECT_GUESS});
  expect(newState).toBe(true);
});

test('returns the state of false upon receiving an action of type `RESET_SUCCESS`', () => {
  const prevState = true;
  const newState = successReducer(prevState, { type: actionTypes.RESET_SUCCESS});
  expect(newState).toBe(false);
});
