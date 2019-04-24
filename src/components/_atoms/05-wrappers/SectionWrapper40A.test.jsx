import React from 'react';
import { shallow } from 'enzyme';

import SectionWrapper40A from './SectionWrapper40A';

describe('<SectionWrapper40A>', () => {
  it('renders', () => {
    const wrapper = shallow(<SectionWrapper40A />);
    expect(wrapper).toBeTruthy();
  });
});
