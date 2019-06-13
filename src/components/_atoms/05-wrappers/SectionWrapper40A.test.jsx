import React from 'react';
import { mount } from 'enzyme';

import SectionWrapper40A from './SectionWrapper40A';

describe('<SectionWrapper40A>', () => {
  let wrapper;
  it('is styled with no passed through props', () => {
    wrapper = mount(<SectionWrapper40A />);
    expect(wrapper).toHaveStyleRule('margin', '0 auto');
  });
  it('is styled based on props', () => {
    const props = {
      margin: 'auto',
      hidden: true
    };
    wrapper = mount(<SectionWrapper40A {...props} />);
    expect(wrapper).toHaveStyleRule('margin', 'auto');
    expect(wrapper).toHaveStyleRule('visibility', 'hidden', {
      media: '(max-width: 983px)'
    });
  });
});
