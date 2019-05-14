import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledParagraph = styled.p`
  height: 100%;
  margin: auto 0;
  overflow: hidden;
  width: 80%;
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

const AboutParagraphA = props => {
  const { paragraph } = props;
  return <StyledParagraph data-testid="paragraph">{paragraph}</StyledParagraph>;
};

export default AboutParagraphA;

AboutParagraphA.propTypes = {
  paragraph: PropTypes.string.isRequired
};
