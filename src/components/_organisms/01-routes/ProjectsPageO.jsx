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
  headheight: '100px',
  headff: 'Montserrat, sans-serif',
  headfs: '25px',
  ls: '1.5px',
  primarycolor: '#dfdfdf',
  secondarycolor: '#b7b7b7',
  secondaryfs: '18px',
  secondaryfst: 'italic',
  border: '1px solid #95d5d2',
  paddingb: '3px',
  sectionfc: 'rgb(255, 255, 255, .7)',
  bg: '#252627',
  mobilefont: '25px',
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

  // NEED A FUNCTION THAT GRABS THE SKILLS FROM EACH

  if (!projects) return null;
  return (
    <ThemeProvider theme={theme}>
      <MainRoleContainerM id="projects" carousel>
        <Carousel widgets={[IndicatorDots, CarouselButtonsA]}>
          {projectKeys.map((projectKey, i) => {
            const project = projects[projectKeys[i]];
            const { name, used, description, skills } = project;
            return (
              <ProjectContainerM
                key={projectKey}
                name={name}
                used={used}
                description={description}
                items={skills}
              />
            );
          })}
        </Carousel>
      </MainRoleContainerM>
    </ThemeProvider>
  );
};

export default ProjectsPageO;
