import React from 'react';
import { shallow } from 'enzyme';
import { cleanup } from 'react-testing-library';
import 'jest-styled-components';

import AnimatedListM from './AnimatedListM';

afterEach(cleanup);

describe('<AnimatedListM />', () => {
  it('renders with interests', () => {
    const props = {
      items: ['1', '2']
    };
    const wrapper = shallow(<AnimatedListM {...props} />);
    expect(wrapper.find('ul')).toBeTruthy();
  });
});

/** WILL BE USED TO TEST ABOUTPAGEO INSTEAD */

// it('fetches and returns data', async () => {
//   axiosMock.get.mockResolvedValueOnce({
//     data: {
//       interests: ['one', 'two', 'three']
//     }
//   });
//   const url = '/resources/stubs/interests.json';

//   const { getByTestId } = render(<AnimatedListM url={url} />);

//   await wait(() => getByTestId('interest-list'));

//   expect(getByTestId('interest-list')).toBeTruthy();
//   expect(axiosMock.get).toHaveBeenCalledTimes(1);
//   expect(axiosMock.get).toHaveBeenCalledWith(url);
// });
