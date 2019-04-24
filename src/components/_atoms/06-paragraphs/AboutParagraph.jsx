import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const StyledParagraph = styled.p`
  height: 100%;
  margin: auto 0;
  overflow: hidden;
  width: 70%;
  white-space: no-wrap;
  color: ${props => props.theme.sectionfc};
  font-family: ${props => props.theme.headff};
  font-size: 15px;

  @media (max-width: 983px) {
    margin: 0;
    width: 100%;
  }
`;

const AboutParagraph = () => {
  const [paragraph, setParagraph] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('/resources/stubs/aboutme.json');

      setParagraph(result.data.description);
    };
    fetchData();
  }, []);

  if (!paragraph) return null;
  return <StyledParagraph>{paragraph}</StyledParagraph>;
};

export default AboutParagraph;
