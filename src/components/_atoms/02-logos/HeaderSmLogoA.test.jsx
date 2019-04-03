import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import 'jest-styled-components';

import HeaderSmLogoA from './HeaderSmLogoA.jsx';

describe('HeaderSmLogoA', () => {
    it('renders', () => {
        const wrapper = shallow(<HeaderSmLogoA to='/' />)
        expect(wrapper).toBeTruthy();
    });

    it('is themed with default styles', () => {
        const wrapper = global.StyledComponents.mountWithTheme(
            <MemoryRouter>
                <HeaderSmLogoA to='/' />
            </MemoryRouter>
        );
        expect(wrapper).toHaveStyleRule('color', '#FFF');
        expect(wrapper).toHaveStyleRule('border-right', '2px solid #95d5d2', {
            media: `(min-width: 670px)`
        });
    });

    it('is themed with custom styles', () => {
        const customTheme = {
            primarycolor: 'black',
            secondarycolor: 'white',
        }
        const wrapper = global.StyledComponents.mountWithTheme(
            <MemoryRouter>
                <HeaderSmLogoA to='/' />
            </MemoryRouter>,
            customTheme
        );
        expect(wrapper).toHaveStyleRule('color', 'black');
        expect(wrapper).toHaveStyleRule('border-right', '2px solid white', {
            media: `(min-width: 670px)`
        });
    });
});



