import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

// Footer Contaner - Molecule
import FooterContainerM from '@M/03-footer/FooterContainerM';

import FooterLinkContainerA from '@A/07-containers/FooterLinkContainerA';
import FooterLinkA from '@A/00-links/FooterLinkA';

const FooterWrapper = styled.div`
  width: 50%;
  margin: auto;
  font-size: ${props => props.theme.fs};
  display: flex;
  flex-flow: row;
  justify-content: center;
`;

const theme = {
  bg: '#95d5d2',
  clr: '#252627',
  ff: 'Montserrat, sans-serif',
  linkfs: '13px',
  fs: '13px',
  iconsize: '18px',
  ml: '15px',
  linkflow: 'row',
};

const FooterO = () => {
  return (
    <ThemeProvider theme={theme}>
      <FooterContainerM>
        <FooterWrapper>
          <FooterLinkContainerA />
        </FooterWrapper>
      </FooterContainerM>
    </ThemeProvider>
  );
};

export default FooterO;
