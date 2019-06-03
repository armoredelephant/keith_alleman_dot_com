import React from 'react';
import { shallow, mount } from 'enzyme';
import 'jest-styled-components';

import MainRoleContainerM from './MainRoleContainerM';

describe('MainRoleContainerM', () => {
  let props;
  let wrapper;
  // enzyme
  it('renders', () => {
    // enzyme
    wrapper = shallow(<MainRoleContainerM />);
    expect(wrapper).toBeTruthy(); // jest
  });

  it('renders justify-content /w prop', () => {
    props = {
      align: 'space-between',
      carousel: true,
      vh: '100vh'
    };
    wrapper = mount(<MainRoleContainerM {...props} />);
    expect(wrapper).toHaveStyleRule('justify-content', 'space-between');
    expect(wrapper).toHaveStyleRule('height', '900px');
  });

  it('renders min-height without carousel', () => {
    props = {
      align: 'space-between',
      carousel: false,
      vh: '100vh'
    };
    wrapper = mount(<MainRoleContainerM {...props} />);
    expect(wrapper).toHaveStyleRule('min-height', '100vh');
  });

  it('renders justify-content /wo prop', () => {
    wrapper = mount(<MainRoleContainerM />);
    expect(wrapper).toHaveStyleRule('justify-content', undefined);
  });
});
