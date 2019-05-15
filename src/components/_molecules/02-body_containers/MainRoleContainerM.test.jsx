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
    const props = {
      align: 'space-between',
      carousel: true,
      vh: '100vh'
    };
    const wrapper = mount(<MainRoleContainerM {...props} />);
    expect(wrapper).toHaveStyleRule('justify-content', 'space-between');
    expect(wrapper).toHaveStyleRule('height', '100vh');
    expect(wrapper).toHaveStyleRule('min-height', '100vh');
  });

  it('renders justify-content /wo prop', () => {
    const wrapper = mount(<MainRoleContainerM />);
    expect(wrapper).toHaveStyleRule('justify-content', undefined);
  });
});
