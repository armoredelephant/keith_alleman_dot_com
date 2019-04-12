import React from 'react';
import { shallow } from 'enzyme';

import InterestListItemA from './InterestListItemsA.jsx';

describe('<InterestListItemA />', () => {
    let wrapper;
    it('renders', () => {
        wrapper = shallow(<InterestListItemA />)
        expect(wrapper).toBeTruthy();
    });
});


