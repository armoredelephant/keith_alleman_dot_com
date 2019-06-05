import React from 'react';

import GithubLinkA from './GithubLinkA';

describe('<GithubLinkA />', () => {
  it('renders with styled theme', () => {
    const props = {
      url: 'http://www.keithalleman.com'
    };
    const customTheme = {
      bg: 'black'
    };
    const wrapper = global.StyledComponents.mountWithTheme(
      <GithubLinkA {...props} />, // prettier-ignore
      customTheme
    );
    expect(wrapper.find('a')).toHaveStyleRule('color', 'black');
  });
});
