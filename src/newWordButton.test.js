import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps, storeFactory } from '../test/testUtils';
import NewWordButton, { UnconnectedNewWordButton } from './newWordButton';

const setup = (initialState={}) => {
  const store = storeFactory(initialState)
  const wrapper = shallow(<NewWordButton store={store} />).dive();
  return wrapper;
};

describe('render tests', () => {
  test('component renders successfully', () => {
    const wrapper = setup({ success: true });
    const component = findByTestAttr(wrapper, 'component-new-word-button');
    expect(component.length).toBe(1);
  });

  test('component does not render if success prop is false', () => {
    const wrapper = setup({ success: false });
    const component = findByTestAttr(wrapper, 'component-new-word-button');
    expect(component.length).not.toBe(1);
  });

  test('does not throw warning with expected props', () => {
    const expectedProps = { success: true };
    checkProps(NewWordButton, expectedProps);
  });
});

describe('redux props', () => {
  test('has success piece of state as props', () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });
  test('`getSecretWord` action creator is a function prop', () => {
    const wrapper = setup();
    const getSecretWordProp = wrapper.instance().props.getSecretWord;
    expect(getSecretWordProp).toBeInstanceOf(Function);
  });
  test('`resetGame` action creator is a function prop', () => {
    const wrapper = setup();
    const resetGameProp = wrapper.instance().props.resetGame;
    expect(resetGameProp).toBeInstanceOf(Function);
  });
});

describe('`rebootGame click handler`', () => {
  let resetGameMock;
  let getSecretWordMock;
  let wrapper;
  beforeEach(() => {
    // create a mock function for `resetGame`
    resetGameMock = jest.fn();
    // create a mock function for `getSecretWord`
    getSecretWordMock = jest.fn();
    // set up NewWordButton with rebootGameMock as a prop
    wrapper = shallow(<UnconnectedNewWordButton
      resetGame={resetGameMock}
      getSecretWord={getSecretWordMock}
      success={true}  />);
    // simulate click on the button
    const newWordButton = findByTestAttr(wrapper, 'component-new-word-button');
    newWordButton.simulate('click');
  });
  test('`resetGame` was called once', () => {
    const resetGameCallCount = resetGameMock.mock.calls.length;
    expect(resetGameCallCount).toBe(1);
  });
  test('`getSecretWord` was called once', () => {
    const getSecretWordCallCount = getSecretWordMock.mock.calls.length;
    expect(getSecretWordCallCount).toBe(1);
  });
})
