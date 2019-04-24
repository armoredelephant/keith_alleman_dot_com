import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import HeaderNavSandwichM from './HeaderNavSandwichM.jsx';

describe('HeaderNavSandwichM', () => {
  it('renders /wo props', () => {
    const wrapper = shallow(<HeaderNavSandwichM />);
    expect(wrapper).toBeTruthy();
  });

  it('renders /w props', () => {
    const wrapper = shallow(<HeaderNavSandwichM activeSandwich="true" />);
    expect(wrapper).toBeTruthy();
  });
});
