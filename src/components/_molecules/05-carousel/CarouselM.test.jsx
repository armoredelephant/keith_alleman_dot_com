import React from 'react';
import { shallow } from 'enzyme';

import CarouselM from '@M/05-carousel/CarouselM';

describe('<CarouselM />', () => {
  let props;
  let wrapper;
  // further testing when hooks are easier to test.
  it('renders', () => {
    props = {
      children: ['1', '2']
    };
    wrapper = shallow(<CarouselM {...props} />);
    expect(wrapper).toBeTruthy();
  });
});
