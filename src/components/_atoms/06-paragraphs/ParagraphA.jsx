import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledParagraph = styled.p`
  height: 100%;
  margin: auto 0;
  overflow: hidden;
  width: ${props => props.theme.pwidth};
  white-space: no-wrap;
  line-height: 140%;
  letter-spacing: 1.5px;
  color: ${props => props.theme.sectionfc};
  font-family: ${props => props.theme.headff};
  font-size: 16px;
  text-indent: 2em;

  @media (max-width: 983px) {
    margin: 0;
    width: 100%;
  }
`;

const ParagraphA = props => {
  const { paragraph } = props;
  return <StyledParagraph>{paragraph}</StyledParagraph>;
};

export default ParagraphA;

ParagraphA.propTypes = {
  paragraph: PropTypes.string
};

ParagraphA.defaultProps = {
  paragraph: 'This is the default prop value for this paragraph.'
};
