import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import 'jest-styled-components';

import HeaderListItemA from './HeaderListItemA.jsx';
import { getConsoleOutput } from '@jest/console';

describe('HeaderListItemA', () => {
    it('renders', () => {
        const wrapper = shallow(<HeaderListItemA name='test' />);
        expect(wrapper).toBeTruthy();
    });

    it('renders color /w prop', () => {
        const wrapper = mount(
            <MemoryRouter>
                <HeaderListItemA name='test' theme={ { primarycolor: 'white', secondarycolor: 'black' } } />
            </MemoryRouter>
        )
        console.log(wrapper.debug())
        expect(wrapper.find('Link')).toHaveStyleRule('color', 'white');
        expect(wrapper.find('Link')).toHaveStyleRule('color', 'white', {
            modifier: `:hover`,
        });
        expect(wrapper.find('Link.section-link-active')).toHaveStyleRule('border-bottom', '1px solid black');
    });
});


