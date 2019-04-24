import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import ModalContainerM from './ModalContainerM.jsx';

describe('ModalContainerM', () => {
  it('renders', () => {
    const wrapper = shallow(<ModalContainerM />);
    expect(wrapper).toBeTruthy();
  });
});
