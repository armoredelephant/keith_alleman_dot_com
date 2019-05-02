import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import FooterContainerM from './FooterContainerM';

describe('<FooterContainerM />', () => {
  let wrapper;
  it('renders', () => {
    wrapper = shallow(<FooterContainerM />);
    expect(wrapper).toBeTruthy();
  });
  it('is styled with the default theme', () => {
    wrapper = global.StyledComponents.mountWithTheme(<FooterContainerM />);
    expect(wrapper).toHaveStyleRule('font-family', 'Montserrat,sans-serif');
  });
  it('is styled with a custom theme', () => {
    const customTheme = {
      bg: 'white'
    };
    wrapper = global.StyledComponents.mountWithTheme(
      <FooterContainerM />, // prettier-ignore
      customTheme
    );
    expect(wrapper).toHaveStyleRule('background', 'white');
  });
});
