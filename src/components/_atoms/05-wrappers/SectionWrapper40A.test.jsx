import React from 'react';
import { mount } from 'enzyme';

import SectionWrapper40A from './SectionWrapper40A';

describe('<SectionWrapper40A>', () => {
  let wrapper;
  it('is styled with no passed through props', () => {
    wrapper = mount(<SectionWrapper40A />);
    expect(wrapper).toBeTruthy();
  });
  it('is styled based on props', () => {
    const props = {
      margin: 'auto',
      hidden: true,
      align: true
    };
    wrapper = mount(<SectionWrapper40A {...props} />);
    expect(wrapper).toHaveStyleRule('align-self', 'flex-start');
    expect(wrapper).toHaveStyleRule('display', 'none', {
      media: '(max-width: 700px)'
    });
  });
});
