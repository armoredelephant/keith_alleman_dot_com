import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import 'jest-styled-components';

import SectionHeaderA from './SectionHeaderA.jsx';

describe('SectionHeaderA', () => {
    it('renders', () => {
        const wrapper = shallow(<SectionHeaderA />);
        expect(wrapper).toBeTruthy();
    });
});