import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';

// This will have to use hook testing.

import AboutParagraph from './AboutParagraph';

describe('<AboutParagraph />', () => {
  let wrapper;
  const props = {
    paragraph: 'filler'
  };

  it('renders', () => {
    wrapper = shallow(<AboutParagraph />);
    expect(wrapper).toBeTruthy();
  });
  it('is themed with custom styles', () => {
    const customTheme = {
      sectionfc: 'white',
      headff: 'Arial'
    };

    wrapper = global.StyledComponents.mountWithTheme(
      <MemoryRouter>
        <AboutParagraph paragraph="test" />
      </MemoryRouter>,
      customTheme
    );
    expect(wrapper.find('StyledParagraph')).toHaveStyleRule('color', 'white');
  });
});
