import React, { useState, useEffect, useRef } from 'react';
import Axios from 'axios';
import styled, { ThemeProvider } from 'styled-components';
// import Carousel from 're-carousel';
import Carousel from '@M/05-carousel/Carousel';

// import CarouselButtonsA from '@A/08-helpers/CarouselButtonsA';
import CarouselButtonsA from '@A/10-buttons/CarouselButtonsA';

// <Main role='main'> container - Molecule
import SectionContainerM from '@M/02-body_containers/SectionContainerM';
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
};

const ScrollAnimation = styled.div`

`;

const ProjectsPageO = () => {
  const [projects, setProjects] = useState(null);
  const [projectKeys, setProjectKeys] = useState([]);

  const projectRef = useRef(null);

  const fetchData = async url => {
    const result = await Axios.get(url);

    setProjects(result.data.projects);
    setProjectKeys(Object.keys(result.data.projects));
  };

  useEffect(() => {
    fetchData('/resources/stubs/projects.json');
  }, []);

  useEffect(() => {
    if (projectRef) console.log(projectRef)
  },[projectRef])

  if (!projects) return null;
  return (
    <ThemeProvider theme={theme}>
      <ScrollAnimation>
        <SectionContainerM id='projects'>
          <Carousel widget={CarouselButtonsA}>
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
                  flexOrder={i}
                  visit={visit}
                />
              );
            })}
          </Carousel>
        </SectionContainerM>
      </ScrollAnimation>
    </ThemeProvider>
  );
};

export default ProjectsPageO;
