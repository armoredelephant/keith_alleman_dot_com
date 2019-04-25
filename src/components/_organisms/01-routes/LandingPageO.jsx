import React from 'react';
import { ThemeProvider } from 'styled-components';

// <Main role='main'> container - Molecule
import MainRoleContainerM from '@M/02-body_containers/MainRoleContainerM';

// placeholder
import SectionHeaderA from '@A/04-headers/SectionHeaderA';

const theme = {
  headheight: '100px',
  headff: 'Montserrat',
  ls: '2px',
  primarycolor: '#FFF',
  headfs: '50px'
};

const LandingPageO = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainRoleContainerM id="landing">
        {/* placeholder */}
        {/** WELCOME */}
        {/** Animated JS? : have a look around. */}
        <SectionHeaderA header="Landing Page" />
      </MainRoleContainerM>
    </ThemeProvider>
  );
};

export default LandingPageO;
