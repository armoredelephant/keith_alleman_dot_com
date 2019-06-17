import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import styled, { ThemeProvider } from 'styled-components';
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
  linkbg: '#95d5d2',
  mobilefont: '25px',
  pb: '30px',
  pwidth: '100%',
  // buttons
  btnDisplay: 'inline-block',
  btnW: 'auto',
  btnH: 'auto',
  btnP: '21px 34px',
  btnFS: '15px',
  btnTT: 'uppercase',
  btnLS: '.1em',
  btnBorderRadius: '30px',
  btnTA: 'center',
  btnTD: 'none',
  btnCursor: 'pointer',
  btnOutline: 'none',
  btnLH: 'normal',
  btnPos: 'absolute'
};

const CarouselContainer = styled.div`
  padding: 70px 15px 0;
  background: #252627;
`;

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
      <CarouselContainer>
        <Carousel widgets={[IndicatorDots, CarouselButtonsA]}>
          {projectKeys.map((projectKey, i) => {
            const project = projects[projectKeys[i]];
            const {
              name, // prettiter-ignore
              used,
              description,
              linkGithub,
              linkUrl,
              skills,
              visit
            } = project;
            return (
              <ProjectContainerM
                key={projectKey}
                description={description}
                items={skills}
                linkGithub={linkGithub}
                linkUrl={linkUrl}
                name={name}
                used={used}
                visit={visit}
              />
            );
          })}
        </Carousel>
      </CarouselContainer>
    </ThemeProvider>
  );
};

export default ProjectsPageO;
