import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import InterestListM from './InterestListM.jsx';

describe('<InterestListM />', () => {
    it('renders', () => {
        const wrapper = shallow(<InterestListM />)
        expect(wrapper).toBeTruthy();
    });
});