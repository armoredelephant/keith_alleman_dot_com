import React from 'react';
import { shallow } from 'enzyme';

import ContactContainerA from './ContactContainerA';

describe('<ContactContainerA />', () => {
  it('renders', () => {
    const wrapper = shallow(<ContactContainerA />);
    expect(wrapper).toBeTruthy();
  });
});
