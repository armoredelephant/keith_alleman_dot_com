import React from 'react';
import ReactDOM from 'react-dom';
import { renderHook, act } from 'react-hooks-testing-library';
import { MemoryRouter } from 'react-router-dom';
import { shallow, mount } from 'enzyme';

// This will have to use hook testing.

import AboutParagraphA from './AboutParagraphA';

describe('<AboutParagraphA />', () => {
  let wrapper;

  it('renders', () => {
    wrapper = shallow(<AboutParagraphA />);
    expect(wrapper).toBeTruthy();
  });
  // it('should receive fetched date', async () => {
  //   let resolve;
  //   function fetch() {
  //     return new Promise(_resolve => {
  //       resolve = _resolve;
  //     });
  //   }

  //   wrapper = mount(<AboutParagraphA />);
  //   act(() => {
  //     wrapper
  //   });
  //   wrapper.debug();
  // });
  it('should receive fetched data', async () => {
    let resolve;
    function fetch() {
      return new Promise(_resolve => {
        resolve = _resolve;
      });
    }

    const el = document.createElement('div');
    act(() => {
      ReactDOM.render(<AboutParagraphA />, el);
    });
    expect(el.innerHTML).toBe('')
    await act(async () => {
      resolve('paragraph');
    });

    expect(el.innerHTML).toBe('paragraph');
  });
});
