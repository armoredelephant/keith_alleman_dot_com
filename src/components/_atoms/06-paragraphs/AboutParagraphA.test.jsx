import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';

// This will have to use hook testing.

import AboutParagraphA from './AboutParagraphA';

describe('<AboutParagraphA />', () => {
  let wrapper;

  it('renders', () => {
    wrapper = shallow(<AboutParagraphA />);
    expect(wrapper).toBeTruthy();
  });
  it('is themed with custom styles', () => {
    const customTheme = {
      sectionfc: 'white',
      headff: 'Arial'
    };
    // needs to setParagraph to set the state? Can't be passed down.
    wrapper = global.StyledComponents.mountWithTheme(
      <MemoryRouter>
        <AboutParagraphA paragraph="test" />
      </MemoryRouter>,
      customTheme
    );
    expect(wrapper.find('p')).toHaveStyleRule('color', 'white');
  });
});
