import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import HeaderNavListContainerM from './HeaderNavListContainerM';

describe('HeaderNavListContainerM', () => {
  it('renders', () => {
    const wrapper = shallow(<HeaderNavListContainerM />);
    expect(wrapper).toBeTruthy();
  });
});
