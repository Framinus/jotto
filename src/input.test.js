import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../test/testUtils';
import Input from './input';

const setup = (initialState={}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />).dive();
};

describe('render', () => {
  describe('word has not been guessed', () => {
    test('renders the component without error', () => {

    });
    test('renders the input box', () => {

    });
    test('renders the submit button', () => {

    });
  });
  describe('word has been guessed', () => {
    test('renders the component without error', () => {

    });
    test('does not render the input box', () => {

    });
    test('does not render the submit button', () => {

    });
  });
});

describe('update state', () => {

});
