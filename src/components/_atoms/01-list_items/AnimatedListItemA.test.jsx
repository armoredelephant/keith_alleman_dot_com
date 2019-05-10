import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import AnimatedListItemA from './AnimatedListItemA';

describe('<AnimatedListItemA />', () => {
  let wrapper;
  it('renders', () => {
    wrapper = shallow(<AnimatedListItemA />);
    expect(wrapper).toBeTruthy();
  });
  it('is themed with default styling', () => {
    wrapper = global.StyledComponents.mountWithTheme(
      <MemoryRouter>
        <AnimatedListItemA />
      </MemoryRouter>
    );
    expect(wrapper.find('li')) // prettier-ignore
      .toHaveStyleRule('font-family', 'Montserrat,sans-serif');
  });
});
