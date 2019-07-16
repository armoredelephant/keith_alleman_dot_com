import React from 'react';
import { shallow, mount } from 'enzyme';
import 'jest-styled-components';

import SectionContainerM from './SectionContainerM';

describe('SectionContainerM', () => {
  let props;
  let wrapper;
  // enzyme
  it('renders', () => {
    // enzyme
    wrapper = shallow(<SectionContainerM />);
    expect(wrapper).toBeTruthy(); // jest
  });

  it('renders justify-content /w prop', () => {
    props = {
      carousel: true,
      fixed: true
    };
    wrapper = mount(<SectionContainerM {...props} />);
    expect(wrapper).toHaveStyleRule('min-height', '800px');
  });
});
