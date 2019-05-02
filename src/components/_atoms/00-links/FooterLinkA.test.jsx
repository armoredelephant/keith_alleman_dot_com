import React from 'react';
import { shallow, mount } from 'enzyme';

import FooterLinkA from './FooterLinkA';

describe('<FooterLinkA />', () => {
  let wrapper;
  const props = {
    icon: 'fab fa-github',
    destination: '#'
  };
  it('renders', () => {
    wrapper = shallow(<FooterLinkA />);
    expect(wrapper).toBeTruthy();
  });
  it('Is receiving props', () => {
    wrapper = mount(<FooterLinkA {...props} />);
    expect(wrapper.find('fab fa-github')).toBeTruthy();
  });
  it('Is styled with default theme', () => {
    wrapper = global.StyledComponents.mountWithTheme(
      <FooterLinkA {...props} /> // prettier-ignore
    );
    expect(wrapper.find('a')).toHaveStyleRule('font-size', '13px');
    expect(wrapper.find('a')).toHaveStyleRule('color', '#252627');
    expect(wrapper.find('a')).toHaveStyleRule('color', '#252627', {
      modifier: ':visited'
    });
  });
  it('Is styled with custom theme', () => {
    const customTheme = {
      clr: 'white',
      fs: '16px'
    };
    wrapper = global.StyledComponents.mountWithTheme(
      // prettier-ignore
      <FooterLinkA {...props} />,
      customTheme
    );
    expect(wrapper.find('a')).toHaveStyleRule('font-size', '16px');
    expect(wrapper.find('a')).toHaveStyleRule('color', 'white');
    expect(wrapper.find('a')).toHaveStyleRule('color', 'white', {
      modifier: ':visited'
    });
  });
});
