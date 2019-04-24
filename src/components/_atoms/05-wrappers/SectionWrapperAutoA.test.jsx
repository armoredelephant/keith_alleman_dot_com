import React from 'react';
import { shallow, mount } from 'enzyme';

import SectionWrapperAutoA from './SectionWrapperAutoA';

describe('<SectionWrapperAutoA />', () => {
  let wrapper;
  it('renders', () => {
    wrapper = shallow(<SectionWrapperAutoA />);
    expect(wrapper).toBeTruthy();
  });
  it('is being styled with props', () => {
    const props = {
      margin: '0'
    };

    wrapper = mount(<SectionWrapperAutoA {...props} />);
    expect(wrapper).toHaveStyleRule('margin', '0');
  });
  it('is being styled /wo props', () => {
    wrapper = mount(<SectionWrapperAutoA />);
    expect(wrapper).toHaveStyleRule('margin', 'auto');
  });
});
