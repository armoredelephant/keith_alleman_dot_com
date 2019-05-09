import React from 'react';
import { shallow } from 'enzyme';

import ListWrapperA from './ListWrapperA';

describe('<ListWrapperA>', () => {
  it('renders', () => {
    const wrapper = shallow(<ListWrapperA />);
    expect(wrapper).toBeTruthy();
  });
});
