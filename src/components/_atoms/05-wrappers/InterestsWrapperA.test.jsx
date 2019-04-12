import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import InterestsWrapperA from './InterestsWrapperA.jsx';

describe('<InterestsWrapperA>', () => {
    it('renders', () => {
        const wrapper = shallow(<InterestsWrapperA />);
        expect(wrapper).toBeTruthy();
    });
});