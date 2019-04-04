import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import HeaderContainerM from './HeaderContainerM.jsx';

describe('HeaderContainerM', () => {
    it('renders', () => {
        const wrapper = shallow(<HeaderContainerM />);
        expect(wrapper).toBeTruthy();
    });

    it('is themed with default styles', () => {
        const wrapper = global.StyledComponents.mountWithTheme(
            <HeaderContainerM className='fixed-nav' />
        );
        expect(wrapper).toHaveStyleRule('color', '#FFF');
        expect(wrapper).toHaveStyleRule('background-color', '#594F4F');
        expect(wrapper.find('header')).toHaveStyleRule('box-shadow', '0 1px 1px 0 rgba(0,0,0,.1)', {
            modifier: `&.fixed-nav`
        });
    });
});