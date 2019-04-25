import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import InterestListItemA from './InterestListItemsA';

describe('<InterestListItemA />', () => {
  let wrapper;
  it('renders', () => {
    wrapper = shallow(<InterestListItemA />);
    expect(wrapper).toBeTruthy();
  });
  it('is themed with default styling', () => {
    wrapper = global.StyledComponents.mountWithTheme(
      <MemoryRouter>
        <InterestListItemA />
      </MemoryRouter>
    );
    expect(wrapper.find('li')) // prettier-ignore
      .toHaveStyleRule('font-family', 'Montserrat,sans-serif');
  });
});
