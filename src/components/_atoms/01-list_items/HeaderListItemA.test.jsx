import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';
import 'jest-styled-components';

import HeaderListItemA from './HeaderListItemA.jsx';

describe('HeaderListItemA', () => {
    it('renders', () => {
        const wrapper = shallow(<HeaderListItemA />)
        expect(wrapper).toBeTruthy();
    });

    it('')
});

// will need setProps to test visibility?


