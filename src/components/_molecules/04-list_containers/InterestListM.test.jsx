import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import InterestListM from './InterestListM';

describe('<InterestListM />', () => {
  let wrapper;
  it('renders', () => {
    wrapper = shallow(<InterestListM />);
    expect(wrapper).toBeTruthy();
  });
  it('renders with interests', () => {
    const props = {
      interests: [1, 2]
    };
    wrapper = shallow(<InterestListM {...props} />);
    expect(wrapper.find('ul')).toBeTruthy();
  });
});
