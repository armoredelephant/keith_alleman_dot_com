import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import BackdropA from './BackdropA.jsx';

describe('BackdropA', () => {
  it('renders', () => {
    const wrapper = shallow(<BackdropA />);
    expect(wrapper).toBeTruthy();
  });
});
