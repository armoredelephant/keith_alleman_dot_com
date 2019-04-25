import React from 'react';
import { shallow, mount } from 'enzyme';
import 'jest-styled-components';

import MainRoleContainerM from './MainRoleContainerM';

describe('MainRoleContainerM', () => {
  // enzyme
  it('renders', () => {
    // enzyme
    const wrapper = shallow(<MainRoleContainerM />);
    expect(wrapper).toBeTruthy(); // jest
  });

  it('renders justify-content /w prop', () => {
    const wrapper = mount(<MainRoleContainerM align="space-between" />);
    expect(wrapper).toHaveStyleRule('justify-content', 'space-between');
  });

  it('renders justify-content /wo prop', () => {
    const wrapper = mount(<MainRoleContainerM />);
    expect(wrapper).toHaveStyleRule('justify-content', undefined);
  });
});
