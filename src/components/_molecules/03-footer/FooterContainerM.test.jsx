import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import FooterContainerM from './FooterContainerM.jsx';

describe('FooterContainerM', () => {
    it('renders', () => {
        const wrapper = shallow(<FooterContainerM />);
        expect(wrapper).toBeTruthy();
    });
});

