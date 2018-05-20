import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../test/testUtils';
import newWordButton from './newWordButton';

test('component renders successfully', () => {
  const wrapper = shallow(<newWordButton />);
  const component = findByTestAttr(wrapper, 'component-new-word-button');
  expect(component.length).toBe(1);
});
