import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FooterLinkA from '@A/00-links/FooterLinkA';

const LinkContainer = styled.div``;

const LinkContainerA = props => {
  const { children } = props;
  return <LinkContainer>{children}</LinkContainer>;
};

export default LinkContainerA;

LinkContainerA.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element, // prettier-ignore
    PropTypes.arrayOf(PropTypes.element)
  ])
};

LinkContainerA.defaultProps = {
  children: [<FooterLinkA />]
};
