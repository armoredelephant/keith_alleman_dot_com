import React from 'react';
import { mount } from 'enzyme';

import ParagraphA from './ParagraphA';

describe('<ParagraphA />', () => {
  it('renders with props', () => {
    const props = {
      paragraph: 'test'
    };
    const wrapper = mount(<ParagraphA {...props} />);
    expect(wrapper).toBeTruthy();
  });
});
