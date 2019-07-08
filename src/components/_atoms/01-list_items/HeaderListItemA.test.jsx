import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import HeaderListItemA from './HeaderListItemA';

describe('HeaderListItemA', () => {
  it('renders', () => {
    const wrapper = shallow(<HeaderListItemA />);
    expect(wrapper).toBeTruthy();
  });

  it('is rendering /w basic styling', () => {
    const wrapper = mount(
      <MemoryRouter>
        <React.Fragment>
          <HeaderListItemA name="about" />
        </React.Fragment>
      </MemoryRouter>
    );
    expect(wrapper.find('li')).toHaveStyleRule('margin-right', '15px');
  });

  it('is themed with default styles, when theme is missing', () => {
    const wrapper = global.StyledComponents.mountWithTheme(
      <MemoryRouter>
        <React.Fragment>
          <HeaderListItemA name="about" last="true" />
        </React.Fragment>
      </MemoryRouter>
    );
    expect(wrapper.find('span')).toHaveStyleRule('color', '#95d5d2');
    expect(wrapper.find('span')).toHaveStyleRule('display', 'none', {
      media: '(min-width: 720px)'
    });
  });

  it('is themed with custom styles', () => {
    const customTheme = {
      secondarycolor: '#FFF'
    };
    const wrapper = global.StyledComponents.mountWithTheme(
      <MemoryRouter>
        <React.Fragment>
          <HeaderListItemA name="about" last="true" />
        </React.Fragment>
      </MemoryRouter>,
      customTheme
    );
    expect(wrapper.find('span')).toHaveStyleRule('color', '#FFF');
  });
});

// will need setProps to test visibility?
