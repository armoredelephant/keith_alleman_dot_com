import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Axios from 'axios';

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

const AboutParagraphA = ({ url }) => {
  const [paragraph, setParagraph] = useState(null);

  const fetchData = async () => {
    const result = await Axios.get(url);

    setParagraph(result.data.description);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!paragraph) return null;
  return <StyledParagraph data-testid="paragraph">{paragraph}</StyledParagraph>;
};

export default AboutParagraphA;

AboutParagraphA.propTypes = {
  url: PropTypes.string
};

AboutParagraphA.defaultProps = {
  url: '/resources/stubs/aboutme.json'
};
