import React from 'react';
import { shallow, mount } from 'enzyme';
import 'jest-styled-components';

import MainRoleContainerM from './MainRoleContainerM.jsx';

describe('MainRoleContainerM', () => { // enzyme
    it('renders', () => { // enzyme
        const wrapper = shallow(<MainRoleContainerM />);
        expect(wrapper).toBeTruthy(); // jest
    });

    it('renders with end', () => {
        const wrapper = mount(<MainRoleContainerM align='space-between' />); // enzyme
        expect(wrapper).toHaveStyleRule('justify-content', 'space-between'); // jest-styled-components 
    })
    
    it('renders with end', () => {
        const wrapper = mount(<MainRoleContainerM />);
        expect(wrapper).toHaveStyleRule('justify-content', undefined); // falsey styled componenet, checks if '' 
    })
});

