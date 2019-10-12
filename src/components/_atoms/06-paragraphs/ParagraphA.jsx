import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledParagraph = styled.p`
  overflow: hidden;
  white-space: no-wrap;
  line-height: 140%;
  letter-spacing: 0.113em;
  color: ${props => props.theme.sectionfc};
  font-family: ${props => props.theme.headff};
  font-size: 1em;
  text-indent: 2em;
  text-align: justify;
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
