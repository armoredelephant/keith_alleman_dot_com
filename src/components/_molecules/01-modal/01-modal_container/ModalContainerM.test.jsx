import React, { useState } from 'react';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import 'jest-styled-components';

import ModalContainerM from './ModalContainerM.jsx';
import BackdropA from '../../../_atoms/03-backdrop/BackdropA.jsx';

describe('ModalContainerM', () => {
    it('renders', () => {
        const wrapper = shallow(<ModalContainerM />);
        expect(wrapper).toBeTruthy();
    });
});
