import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { ThemeProvider } from 'styled-components';
// import Carousel from 're-carousel';
import CarouselM from '@M/05-carousel/CarouselM';

// import CarouselButtonsA from '@A/08-helpers/CarouselButtonsA';
import CarouselButtonsA from '@A/10-buttons/CarouselButtonsA';

// <Main role='main'> container - Molecule
import SectionContainerM from '@M/02-body_containers/SectionContainerM';
import ProjectContainerM from '@M/02-body_containers/ProjectContainerM';

// placeholder

const theme = {
  headheight: '6.250em',
  headff: 'Montserrat, sans-serif',
  headfs: '1.563em',
  ls: '0.094em',
  primarycolor: '#dfdfdf',
  secondarycolor: '#b7b7b7',
  secondaryfs: '1.125em',
  secondaryfst: 'italic',
  border: '.063em solid #95d5d2',
  paddingb: '.188em',
  sectionfc: 'rgb(255, 255, 255, .7)',
  bg: '#252627',
  linkbg: '#95d5d2',
  mobilefont: '1.563em',
  pb: '1.875em',
  pwidth: '100%',
  // buttons
  btnDisplay: 'inline-block',
  btnW: 'auto',
  btnH: 'auto',
  btnP: '1.313em 2.125em',
  btnFS: '.928em',
  btnTT: 'uppercase',
  btnLS: '.1em',
  btnBorderRadius: '1.875em',
  btnTA: 'center',
  btnTD: 'none',
  btnCursor: 'pointer',
  btnOutline: 'none',
  btnLH: 'normal',
  btnClr: 'rgba(255, 255, 255, 0.8)'
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
      <SectionContainerM id="projects">
        <CarouselM widget={CarouselButtonsA}>
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
        </CarouselM>
      </SectionContainerM>
    </ThemeProvider>
  );
};

export default ProjectsPageO;
