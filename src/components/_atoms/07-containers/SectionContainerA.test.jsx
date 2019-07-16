import React from 'react';
import { mount } from 'enzyme';

import SectionContainerA from '@A/07-containers/SectionContainerA';

describe('<SectionContainerA />', () => {
  it('Renders with styles', () => {
    const wrapper = mount(<SectionContainerA />);
    expect(wrapper).toBeTruthy();
    expect(wrapper.find('div')).toHaveStyleRule('width', '100%');
  });
});
