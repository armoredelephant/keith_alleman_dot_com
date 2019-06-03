import React from 'react';

import GhostLinkA from './GhostLinkA';

describe('<GhostLinkA />', () => {
  it('renders with styled with theme', () => {
    const props = {
      url: 'https://www.keithalleman.com'
    };
    const customTheme = {
      primarycolor: 'black'
    };
    const wrapper = global.StyledComponents.mountWithTheme(
      <GhostLinkA {...props} />, // prettier-ignore
      customTheme
    );
    expect(wrapper.find('a')).toHaveStyleRule('color', 'black');
  });
});
