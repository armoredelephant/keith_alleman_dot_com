import React from 'react';
import { shallow } from 'enzyme';

import InterestsWrapperA from './InterestsWrapperA';

describe('<InterestsWrapperA>', () => {
  it('renders', () => {
    const wrapper = shallow(<InterestsWrapperA />);
    expect(wrapper).toBeTruthy();
  });
});
