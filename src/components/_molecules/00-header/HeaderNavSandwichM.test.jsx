import React from 'react';
import { shallow, mount } from 'enzyme';
import 'jest-styled-components';

import HeaderNavSandwichM from './HeaderNavSandwichM';

describe('HeaderNavSandwichM', () => {
  let wrapper;
  it('renders /wo props', () => {
    wrapper = shallow(<HeaderNavSandwichM />);
    expect(wrapper).toBeTruthy();
  });

  it('renders /w props', () => {
    wrapper = shallow(<HeaderNavSandwichM activeSandwich="true" />);
    expect(wrapper.find('.nav-bar-active')).toBeTruthy();
  });

  it('defaultProps is defined', () => {
    wrapper = mount(<HeaderNavSandwichM />);
    const props = wrapper.props();
    expect(props).toBeTruthy();
    expect(props.handleAnimation('working')).toBe('working');
  });
  it('chooses correct className', () => {
    const props = {
      activeSandwitch: true
    };
    wrapper = mount(<HeaderNavSandwichM {...props} />);
    console.log(wrapper.debug());
    expect(wrapper.find('.nav-bar-active')).toBeTruthy();
  });
});
