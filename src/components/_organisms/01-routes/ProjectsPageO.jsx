import React from 'react';
import { ThemeProvider } from 'styled-components';
import Carousel from 're-carousel';
import IndicatorDots from '@A/08-helpers/IndicatorDotsA';
import CarouselButtonsA from '@A/08-helpers/CarouselButtonsA';

// <Main role='main'> container - Molecule
import MainRoleContainerM from '@M/02-body_containers/MainRoleContainerM';

// placeholder

const theme = {
  headheight: '100px',
  headff: 'Montserrat',
  ls: '2px',
  primarycolor: '#FFF',
  headfs: '50px',
  pb: '30px'
};

const ProjectsPageO = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainRoleContainerM id="projects">
        {/* placeholder */}
        <Carousel widgets={[IndicatorDots, CarouselButtonsA]}>
          {/** create a reusable div that will load each project */}
          <div style={{ backgroundColor: 'tomato', height: '100%' }} />
          <div style={{ backgroundColor: 'orange', height: '100%' }} />
          <div style={{ backgroundColor: 'orchid', height: '100%' }} />
          {/* <SectionHeaderA header="Project Page" /> */}
        </Carousel>
      </MainRoleContainerM>
    </ThemeProvider>
  );
};

export default ProjectsPageO;
