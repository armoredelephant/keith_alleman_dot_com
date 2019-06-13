import React from 'react';
import { shallow } from 'enzyme';

import FooterLinkA from '@A/00-links/FooterLinkA';
import FooterLinkContainerA from './FooterLinkContainerA';

describe('<FooterLinkContainerA />', () => {
  let wrapper;
  it('renders', () => {
    wrapper = shallow(<FooterLinkContainerA />);
    expect(wrapper).toBeTruthy();
  });
  it('renders with contact prop', () => {
    const props = {
      contact: true
    };
    wrapper = global.StyledComponents.mountWithTheme(
      <FooterLinkContainerA {...props} /> // prettier-ignore
    );
    expect(wrapper).toHaveStyleRule('flex-flow', 'row');
    expect(wrapper.find(FooterLinkA)).toBeTruthy();
  });
});
