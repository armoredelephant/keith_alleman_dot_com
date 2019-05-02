import React from 'react';
import { shallow } from 'enzyme';
import { render, cleanup, wait } from 'react-testing-library';
import 'jest-styled-components';
import 'jest-dom/extend-expect';
import axiosMock from 'axios';

import InterestListM from './InterestListM';

afterEach(cleanup);

describe('<InterestListM />', () => {
  let wrapper;
  it('renders', () => {
    wrapper = shallow(<InterestListM />);
    expect(wrapper).toBeTruthy();
  });
  it('renders with interests', () => {
    const props = {
      interests: [1, 2]
    };
    wrapper = shallow(<InterestListM {...props} />);
    expect(wrapper.find('ul')).toBeTruthy();
  });
  it('fetches and returns data', async () => {
    axiosMock.get.mockResolvedValueOnce({
      data: {
        interests: ['one', 'two', 'three']
      }
    });
    const url = '/resources/stubs/interests.json';

    const { getByTestId } = render(<InterestListM url={url} />);

    await wait(() => getByTestId('interest-list'));

    expect(getByTestId('interest-list')).toBeTruthy();
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(axiosMock.get).toHaveBeenCalledWith(url);
  });
});
