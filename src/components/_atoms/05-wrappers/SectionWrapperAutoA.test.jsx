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
    };

    wrapper = mount(<SectionWrapperAutoA {...props} />);
    expect(wrapper).toHaveStyleRule('display', 'none', {
      media: '(max-width:700px)'
    });
  });
});
