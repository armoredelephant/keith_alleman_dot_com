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
      hidden: true,
      margin: '0'
    };

    wrapper = mount(<SectionWrapperAutoA {...props} />);
    expect(wrapper).toHaveStyleRule('margin', '0');
    expect(wrapper).toHaveStyleRule('visibility', 'hidden', {
      media: '(max-width:600px)'
    });
  });
  it('is being styled /wo props', () => {
    wrapper = mount(<SectionWrapperAutoA />);
    expect(wrapper).toHaveStyleRule('margin', 'auto');
    expect(wrapper).toHaveStyleRule('visibility', 'visible', {
      media: '(max-width:600px)'
    });
  });
});
