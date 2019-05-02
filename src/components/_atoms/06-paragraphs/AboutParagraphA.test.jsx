import React from 'react';
import { render, cleanup, wait } from 'react-testing-library';
import 'jest-dom/extend-expect';
import axiosMock from 'axios';

import AboutParagraphA from './AboutParagraphA';

afterEach(cleanup);

describe('<AboutParagraphA />', () => {
  it('fetches and displays data', async () => {
    axiosMock.get.mockResolvedValueOnce({
      data: {
        description: 'test'
      }
    });
    const url = '/resources/stubs/aboutme.json';

    const { getByTestId } = render(<AboutParagraphA url={url} />);

    await wait(() => getByTestId('paragraph'));

    expect(getByTestId('paragraph')).toHaveTextContent('test');
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(axiosMock.get).toHaveBeenCalledWith(url);
  });
});
