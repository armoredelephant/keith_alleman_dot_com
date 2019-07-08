import React from 'react';
import { shallow } from 'enzyme';

import SectionHeaderA from './SectionHeaderA';

describe('<SectionHeaderA>', () => {
  let wrapper;

  it('renders', () => {
    wrapper = shallow(<SectionHeaderA header="test" />);
    expect(wrapper).toBeTruthy();
  });

  it('is themed with default styles', () => {
    wrapper = global.StyledComponents.mountWithTheme(
      // prettier-ignore
      <SectionHeaderA header="test" />
    );
    expect(wrapper.find('h2')).toHaveStyleRule('color', '#FFF');
    expect(wrapper.find('h2')) // prettier-ignore
      .toHaveStyleRule('font-family', 'Montserrat,sans-serif');
    expect(wrapper.find('h2')).toHaveStyleRule('letter-spacing', '1.4px');
    expect(wrapper.find('h2')).toHaveStyleRule('font-size', '32px');
  });

  it('is themed with custom styles', () => {
    const customTheme = {
      headff: 'Arial',
      headfs: '32px',
      ls: '1.4px',
      primarycolor: 'black'
    };
    wrapper = global.StyledComponents.mountWithTheme(
      <SectionHeaderA header="test" margin="15px" />,
      customTheme
    );
    expect(wrapper.find('h2')).toHaveStyleRule('letter-spacing', '1.4px');
    expect(wrapper.find('h2')).toHaveStyleRule('font-family', 'Arial');
    expect(wrapper.find('h2')).toHaveStyleRule('color', 'black');
    expect(wrapper.find('h2')).toHaveStyleRule('font-size', '32px');
  });
});
