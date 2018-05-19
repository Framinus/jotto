import React from 'react';
import App, { UnconnectedApp } from './App';
import { shallow } from 'enzyme';
import { storeFactory } from '../test/testUtils';

/**
* @function setup
* @param {object} state - State for this setup.
* @returns {ShallowWrapper}
*/

const setup = (state={}) => {
  const store = storeFactory(state);
  const wrapper = shallow(<App store={store} />).dive();
  return wrapper;
};

describe('app redux props', () => {
  test('has success piece of state as redux prop', () => {
    const success = false;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });
  test('has secretWord state as redux prop', () => {
    const secretWord = 'party';
    const wrapper = setup({ secretWord });
    const secretWordProp = wrapper.instance().props.secretWord;
    expect(secretWordProp).toBe(secretWord);
  });
  test('has access to `guessedWords` state', () => {
    const guessedWords = [{ guessedWord: 'train', letterMatchCount: 3 }];
    const wrapper = setup({ guessedWords });
    const guessedWordsProp = wrapper.instance().props.guessedWords;
    expect(guessedWordsProp).toBe(guessedWords);
  });
  test('`getSecretWord` action creator is a function prop', () => {
    const wrapper = setup();
    const getSecretWordProp = wrapper.instance().props.getSecretWord;
    expect(getSecretWordProp).toBeInstanceOf(Function);
  });
});

test('`getSecretWord` runs on App mount', () => {
  const getSecretWordMock = jest.fn();

  const props = {
    getSecretWord: getSecretWordMock,
    success: false,
    guessedWords: [],
  }
  // set up app component with getSecretWordMock as the getSecretWordProp.
  const wrapper = shallow(<UnconnectedApp {...props} />);

  // run lifecycle method.
  wrapper.instance().componentDidMount();

  // check to see if mock ran
  const getSecretWordCallCount = getSecretWordMock.mock.calls.length;

  expect(getSecretWordCallCount).toBe(1);
})
