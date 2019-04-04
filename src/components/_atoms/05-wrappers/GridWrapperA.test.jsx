import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import GridWrapperA from './GridWrapperA.jsx';

describe('GridWrapperA', () => {
    it('renders', () => {
        const wrapper = shallow(<GridWrapperA />);
        expect(wrapper).toBeTruthy();
    });
});