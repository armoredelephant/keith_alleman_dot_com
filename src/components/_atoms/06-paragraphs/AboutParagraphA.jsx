import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

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

const AboutParagraphA = () => {
  const [paragraph, setParagraph] = useState(null);

  const fetchData = async () => {
    const result = await axios('/resources/stubs/aboutme.json');

    setParagraph(result.data.description);
  };

  useEffect(() => {
    fetchData()
  }, []);

  if (!paragraph) return null;
  return <StyledParagraph>{paragraph}</StyledParagraph>;
};

export default AboutParagraphA;
