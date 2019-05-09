import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { ThemeProvider } from 'styled-components';
import Carousel from 're-carousel';

// widgets for Carousel
import IndicatorDots from '@A/08-helpers/IndicatorDotsA';
import CarouselButtonsA from '@A/08-helpers/CarouselButtonsA';

// <Main role='main'> container - Molecule
import MainRoleContainerM from '@M/02-body_containers/MainRoleContainerM';
import ProjectContainerM from '@M/02-body_containers/ProjectContainerM';

// placeholder

const theme = {
  bg: '#252627',
  headheight: '100px',
  headff: 'Montserrat',
  ls: '2px',
  primarycolor: '#FFF',
  headfs: '50px',
  pb: '30px'
};

const ProjectsPageO = () => {
  const [projects, setProjects] = useState(null);
  const [projectKeys, setProjectKeys] = useState([]);

  const fetchData = async url => {
    const result = await Axios.get(url);

    setProjects(result.data.projects);
    setProjectKeys(Object.keys(result.data.projects));
  };

  useEffect(() => {
    fetchData('/resources/stubs/projects.json');
  }, []);

  if (!projects) return null;
  return (
    <ThemeProvider theme={theme}>
      <MainRoleContainerM id="projects">
        <Carousel widgets={[IndicatorDots, CarouselButtonsA]}>
          {projectKeys.map((projectKey, i) => {
            const { name, used, description } = projects[projectKeys[i]];
            return (
              <ProjectContainerM
                key={projectKey}
                name={name}
                used={used}
                description={description}
              />
            );
          })}
        </Carousel>
      </MainRoleContainerM>
    </ThemeProvider>
  );
};

export default ProjectsPageO;
