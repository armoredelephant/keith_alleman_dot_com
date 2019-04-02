import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter, Route, Link } from 'react-router-dom';
import { css } from 'styled-components';
import 'jest-styled-components';

import HeaderLinkA from './HeaderLinkA.jsx';

describe('HeaderLinkA', () => {
    it('renders color /w prop', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/about']} >
                <Route component={props => <HeaderLinkA {...props} name='about' test='about' theme={{ primarycolor: 'white', secondarycolor: 'black' }} /> } path='/about' /> 
            </MemoryRouter>
        )
        expect(wrapper.find('Link')).toHaveStyleRule('color', 'white');
        expect(wrapper.find('Link')).toHaveStyleRule('color', 'white', {
            modifier: `:hover`,
        });
    });

    it('is themed with default styles, when theme is missing', () => {
        const wrapper = global.StyledComponents.mountWithTheme(
            <MemoryRouter initialEntries={['/about']} >
                <React.Fragment>      
                    <HeaderLinkA name='about' testclass='section-link-active' />,
                </React.Fragment>
            </MemoryRouter>
        )
        expect(wrapper.find('Link')).toHaveStyleRule('color', '#FFF')
        expect(wrapper.find('Link')).toHaveStyleRule('color', '#FFF', {
            modifier: `:hover`
        });
        expect(wrapper.find('a.section-link-active')).toBeTruthy();
    });

    it('is themed with custom styles', () => {
        const customTheme = {
            primarycolor: 'black',
            secondarycolor: 'black'
        }
        const wrapper = global.StyledComponents.mountWithTheme(
            <MemoryRouter initialEntries={['/about']} >
                <React.Fragment>      
                    <HeaderLinkA name='about' testclass='section-link-active' />,
                </React.Fragment>
            </MemoryRouter>,
            customTheme
        )
        expect(wrapper.find('Link')).toHaveStyleRule('color', 'black')
        expect(wrapper.find('Link')).toHaveStyleRule('color', 'black', {
            modifier: `:hover`
        });
        expect(wrapper.find('a.section-link-active')).toBeTruthy();
    });
});