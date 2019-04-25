import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import HeaderLogoContainerM from './HeaderLogoContainerM';

describe('HeaderLogoContainerM', () => {
  it('renders', () => {
    const wrapper = shallow(<HeaderLogoContainerM />);
    expect(wrapper).toBeTruthy();
  });
});
