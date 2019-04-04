import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import ModalM from './ModalM.jsx';

describe('ModalM', () => {
    it('renders', () => {
        const wrapper = shallow(<ModalM />);
        expect(wrapper).toBeTruthy();
    });
    it('renders', () => {
        const wrapper = shallow(<ModalM />);
        expect(wrapper).toBeTruthy();
    });
});