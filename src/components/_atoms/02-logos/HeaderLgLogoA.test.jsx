import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import 'jest-styled-components';

import HeaderLgLogoA from './HeaderLgLogoA.jsx';

describe('HeadeLgLogoA', () => {
    it('renders', () => {
        const wrapper = shallow(<HeaderLgLogoA />)
        expect(wrapper).toBeTruthy();
    });

    it('is themed with default styles, when theme is missing', () => {
        const wrapper = global.StyledComponents.mountWithTheme(
            <MemoryRouter>
                <HeaderLgLogoA to='/' />
            </MemoryRouter>
        );
        expect(wrapper).toHaveStyleRule('color', '#FFF');
        expect(wrapper).toHaveStyleRule('color', '#FFF', {
            media: `(max-width: 670px)`,
        });
        expect(wrapper).toHaveStyleRule('border-bottom', '1px solid #95d5d2', {
            media: `(max-width: 670px)`,
        });
    });

    it('is themed with custom styles', () => {
        const customTheme = {
            primarycolor: 'black',
            secondarycolor: 'white'
        }
        const wrapper = global.StyledComponents.mountWithTheme(
            <MemoryRouter>
                <HeaderLgLogoA to='/' />
            </MemoryRouter>,
            customTheme
        );
        expect(wrapper).toHaveStyleRule('color', 'black');
        expect(wrapper).toHaveStyleRule('color', 'black', {
            media: `(max-width: 670px)`
        });
        expect(wrapper).toHaveStyleRule('border-bottom', '1px solid white', {
            media: `(max-width: 670px)`
        });
    });
});



