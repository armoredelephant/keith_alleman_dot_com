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
  fs: '13px',
  iconsize: '18px'
};

const FooterO = () => {
  return (
    <ThemeProvider theme={theme}>
      <FooterContainerM>
        <FooterWrapper>
          <FooterLinkContainerA>
            <FooterLinkA // prettier-ignore
              destination="mailto:keith.alleman.dev@gmail.com"
              name="Contact"
            />
            <FooterLinkA // prettier-ignore
              destination="#"
              name="Resume"
            />
            <FooterLinkA // prettier-ignore
              destination="https://github.com/armoredelephant"
              icon="fab fa-github"
            />
            <FooterLinkA
              destination="https://www.linkedin.com/in/keith-alleman-b9b14487"
              icon="fab fa-linkedin"
            />
          </FooterLinkContainerA>
        </FooterWrapper>
      </FooterContainerM>
    </ThemeProvider>
  );
};

export default FooterO;
