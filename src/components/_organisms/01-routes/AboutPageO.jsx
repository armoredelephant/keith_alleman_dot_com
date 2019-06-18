import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import Axios from 'axios';

// <Main role='main'> container - Molecule
import MainRoleContainerM from '@M/02-body_containers/MainRoleContainerM';

// placeholder
import SectionWrapperAutoA from '@A/05-wrappers/SectionWrapperAutoA';
import SectionHeaderA from '@A/04-headers/SectionHeaderA';
import SectionContainerA from '@A/07-containers/SectionContainerA';

// Left Side Wrapper - Atom
import SectionWrapper40A from '@A/05-wrappers/SectionWrapper40A';
import ListWrapperA from '@A/05-wrappers/ListWrapperA';

// InterestList - Molecule
import AnimatedListM from '@M/04-list_containers/AnimatedListM';

// Paragraph - Atom
import ParagraphA from '@A/06-paragraphs/ParagraphA';

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
  mobilefont: '25px',
  pwidth: '80%'
};

const AboutPageO = () => {
  const [interests, setInterests] = useState(null);
  const [paragraph, setParagraph] = useState(null);

  const fetchData = async (url, cb) => {
    const result = await Axios.get(url);
    cb(result.data.items);
  };

  useEffect(() => {
    fetchData('/resources/stubs/interests.json', setInterests);
    fetchData('/resources/stubs/aboutme.json', setParagraph);
  }, []); // <== Empty array to avoid activating on updates, and ONLY for mount.

  if (!interests || !paragraph) return null;
  return (
    <ThemeProvider theme={theme}>
      <MainRoleContainerM
        id="about" // prettier-ignore
        className="about-page"
      >
        <SectionContainerA>
          <SectionWrapper40A
            className="about-l" // prettier-ignore
            center={true}
            hidden={true}
          >
            <ListWrapperA>
              <SectionHeaderA
                header="Interests & Hobbies" // prettier-ignore
                secondary="true"
              />
              <AnimatedListM animated items={interests} />
              {/** Photo and design in here maybe not use grid? */}
            </ListWrapperA>
          </SectionWrapper40A>
          <SectionWrapperAutoA className="about-r">
            <SectionHeaderA header={"- I'm Keith Alleman."} />
            <ParagraphA paragraph={paragraph} />
            {/** <DescriptionParagraphA>text</DescriptionParagraph> */}
          </SectionWrapperAutoA>
        </SectionContainerA>
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
