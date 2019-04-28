import React from 'react';
import { ThemeProvider } from 'styled-components';

// <Main role='main'> container - Molecule
import MainRoleContainerM from '@M/02-body_containers/MainRoleContainerM';

// placeholder
import SectionWrapperAutoA from '@A/05-wrappers/SectionWrapperAutoA';
import SectionHeaderA from '@A/04-headers/SectionHeaderA';

// Left Side Wrapper - Atom
import SectionWrapper40A from '@A/05-wrappers/SectionWrapper40A';
import InterestsWrapperA from '@A/05-wrappers/InterestsWrapperA';

// InterestList - Molecule
import InterestListM from '@M/04-list_containers/InterestListM';

// Paragraph - Atom
import AboutParagraphA from '@A/06-paragraphs/AboutParagraphA';

const theme = {
  headheight: '100px',
  headff: 'Montserrat, sans-serif',
  headfs: '38px',
  ls: '1.5px',
  primarycolor: '#dfdfdf',
  secondarycolor: '#b7b7b7',
  secondaryfs: '18px',
  secondaryfst: 'italic',
  border: '1px solid #95d5d2',
  paddingb: '3px',
  sectionfc: 'rgb(255, 255, 255, .7)',
  mobilefont: '25px'
};

const AboutPageO = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainRoleContainerM id="about" className="about-page">
        <SectionWrapper40A className="about-l">
          <InterestsWrapperA>
            <SectionHeaderA
              margin="30px 0 0 0" // prettier-ignore
              header="Interests & Hobbies"
              secondary="true"
            />
            <InterestListM />
            {/** Photo and design in here maybe not use grid? */}
          </InterestsWrapperA>
        </SectionWrapper40A>
        <SectionWrapperAutoA className="about-r" margin="0 auto 0 0">
          <SectionHeaderA margin="auto 0" header={"- I'm Keith Alleman."} />
          <AboutParagraphA />
          {/** <DescriptionParagraphA>text</DescriptionParagraph> */}
        </SectionWrapperAutoA>
      </MainRoleContainerM>
    </ThemeProvider>
  );
};

export default AboutPageO;

/**
 * Avid Gamer
 * eSports Enthiusiast
 * Dog Lover
 * Continous Learner
 * Model Kit Builder
 * Hiker
 */
