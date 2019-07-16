import React from 'react';
import { mount } from 'enzyme';

import GhostLinkA from '@A/00-links/GhostLinkA';
import ProjectContainerM, { LinkContainer } from './ProjectContainerM';

describe('<ProjectContainerM />', () => {
  let customTheme;
  let props;
  let wrapper;
  it('renders with styling from theme.', () => {
    props = {
      description: 'test',
      items: ['one', 'two'],
      linkGitHub: 'http://github.com/armoredelephant',
      linkUrl: 'http://www.keith.alleman.com',
      name: 'eviHelp',
      used: 'React',
      visit: true
    };
    customTheme = {
      bg: 'black',
      primarycolor: 'white',
      ls: '1.2px'
    };
    wrapper = global.StyledComponents.mountWithTheme(
      <ProjectContainerM {...props} />, // prettier-ignore
      customTheme
    );
    expect(wrapper.find('Container')).toHaveStyleRule(
      'background-color', // prettier-ignore
      'black'
    );
    expect(wrapper.find('Title')).toHaveStyleRule('color', 'white');
    expect(wrapper.find('Used')).toHaveStyleRule('color', 'white');
    expect(wrapper.find(GhostLinkA)).toBeTruthy();
  });
  it('renders /w false visit prop', () => {
    props = {
      items: [1, 2],
      visit: false
    };
    wrapper = mount(<ProjectContainerM {...props} />);
    expect(wrapper.find(LinkContainer)) // prettier-ignore
      .toHaveStyleRule('justify-content', 'flex-end');
    expect(wrapper.props().visit).toBeFalsy();
  });
});
