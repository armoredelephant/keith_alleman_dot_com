import React from 'react';
import { shallow } from 'enzyme';

import FooterLinkContainerA from './FooterLinkContainerA';

describe('<FooterLinkContainerA />', () => {
  it('renders', () => {
    const wrapper = shallow(<FooterLinkContainerA />);
    expect(wrapper).toBeTruthy();
  });
});
