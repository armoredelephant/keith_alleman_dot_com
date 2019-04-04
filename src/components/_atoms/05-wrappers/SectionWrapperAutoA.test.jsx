import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import SectionWrapperAutoA from './SectionWrapperAutoA.jsx';

describe('SectionWrapperAutoA', () => {
    it('renders', () => {
        const wrapper = shallow(<SectionWrapperAutoA />);
        expect(wrapper).toBeTruthy();
    });
});