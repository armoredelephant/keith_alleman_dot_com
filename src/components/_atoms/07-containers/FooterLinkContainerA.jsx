import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FooterLinkA from '@A/00-links/FooterLinkA';

const LinkContainer = styled.div`
  display: flex;
  text-align: right;
  margin-right: 30px;
  overflow: hidden;
  flex-flow: ${props => props.theme.linkflow};
`;

const LinkContainerA = props => {
  const { contact } = props;
  return (
    <LinkContainer {...props}>
      <FooterLinkA // prettier-ignore
        destination="mailto:keith.alleman.dev@gmail.com"
        name="Contact"
      />
      <FooterLinkA // prettier-ignore
        destination="https://bit.ly/2JIO42r"
        name="Resume"
      />
      <FooterLinkA // prettier-ignore
        destination="https://github.com/armoredelephant"
        icon={!contact && 'fab fa-github'}
        name={contact && 'Github'}
      />
      <FooterLinkA
        destination="https://www.linkedin.com/in/keith-alleman-b9b14487"
        icon={!contact && 'fab fa-linkedin'}
        name={contact && 'LinkedIn'}
      />
    </LinkContainer>
  );
};

export default LinkContainerA;

LinkContainerA.propTypes = {
  contact: PropTypes.bool
};

LinkContainerA.defaultProps = {
  contact: false
};
