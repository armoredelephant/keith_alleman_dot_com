import React from 'react';
import { shallow, mount } from 'enzyme';
import { cleanup } from 'react-testing-library';
import 'jest-styled-components';

import AnimatedListItemA from '@A/01-list_items/AnimatedListItemA';
import AnimatedListM, { BasicListItem } from './AnimatedListM';

afterEach(cleanup);

describe('<AnimatedListM />', () => {
  let wrapper;
  let props;
  it('renders without animation', () => {
    props = {
      items: ['1', '2']
    };
    wrapper = mount(<AnimatedListM {...props} />);
    expect(wrapper.find(BasicListItem)).toBeTruthy();
  });
  it('renders with animation', () => {
    props = {
      items: ['1', '2'],
      animated: true
    };
    wrapper = shallow(<AnimatedListM {...props} />);
    expect(wrapper.find(AnimatedListItemA)).toBeTruthy();
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
