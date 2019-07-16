import React from 'react';
import { mount } from 'enzyme';

import CarouselButtonsA from '@A/10-buttons/CarouselButtonsA';

describe('<CarouselButtonsA />', () => {
  let wrapper;
  let props;
  it('Left button is receiving hidden propd and theme styling.', () => {
    props = {
      index: 0
    };
    wrapper = global.StyledComponents.mountWithTheme(
      // prettier-ignore
      <CarouselButtonsA {...props} />
    );
    expect(wrapper.find('.left')).toHaveStyleRule('visibility', 'hidden');
    expect(wrapper.find('.left')).toHaveStyleRule('color', '#594F4F');
  });
  it('Right button is receiving hidden prop.', () => {
    props = {
      count: 2,
      index: 2
    };
    wrapper = mount(<CarouselButtonsA {...props} />);
    expect(wrapper.find('.right')).toHaveStyleRule('visibility', 'hidden');
  });
  it('Index indicator dot is working properly', () => {
    props = {
      index: 0,
      total: 3
    };
    wrapper = mount(<CarouselButtonsA {...props} />);
    expect(wrapper.find('span').first()).toHaveStyleRule('opacity', '1');
  });
});
