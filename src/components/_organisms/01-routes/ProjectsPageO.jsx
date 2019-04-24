import React from 'react';
import { ThemeProvider } from 'styled-components';

// <Main role='main'> container - Molecule
import MainRoleContainerM from 'M/02-body_containers/MainRoleContainerM';

// placeholder
import SectionHeaderA from 'A/04-headers/SectionHeaderA';

const theme = {
  headheight: '100px',
  headff: 'Montserrat',
  ls: '2px',
  primarycolor: '#FFF',
  headfs: '50px'
};

const ProjectsPageO = () => {
  return (
    <MainRoleContainerM>
      <ThemeProvider theme={theme}>
        {/* placeholder */}
        <SectionHeaderA header="Project Page" />
      </ThemeProvider>
    </MainRoleContainerM>
  );
};

export default ProjectsPageO;
