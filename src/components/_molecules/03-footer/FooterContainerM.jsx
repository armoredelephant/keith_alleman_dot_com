import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import AboutParagraphA from '@A/06-paragraphs/AboutParagraphA';

const FooterContainer = styled.footer`
  width: 100%;
  height: 100px;
  font-family: ${props => props.theme.ff};
  background: ${props => props.theme.bg};
  color: ${props => props.theme.clr};
  display: flex;
  justify-content: center;
`;

const FooterContainerM = props => {
  const { children } = props;
  return <FooterContainer>{children}</FooterContainer>;
};

export default FooterContainerM;

FooterContainerM.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element, // prettier-ignore
    PropTypes.arrayOf(PropTypes.element)
  ])
};

FooterContainerM.defaultProps = {
  children: <AboutParagraphA />
};
