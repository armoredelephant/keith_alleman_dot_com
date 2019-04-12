import React from 'react';
import { ThemeProvider } from 'styled-components';

// <Main role='main'> container - Molecule  
import MainRoleContainerM from '../../_molecules/02-body_containers/MainRoleContainerM.jsx';

// placeholder
import SectionWrapperAutoA from '../../_atoms/05-wrappers/SectionWrapperAutoA.jsx';
import SectionHeaderA from '../../_atoms/04-headers/SectionHeaderA.jsx';

// Left Side Wrapper - Atom
import SectionWrapper40A from '../../_atoms/05-wrappers/SectionWrapper40A.jsx';
import InterestsWrapperA from '../../_atoms/05-wrappers/InterestsWrapperA.jsx';

// InterestList - Molecule
import InterestListM from '../../_molecules/04-list_containers/InterestListM.jsx';

const theme = {
    headheight: '100px',
    headff: 'Montserrat, sans-serif',
    headfs: '38px',
    ls: '2px',
    primarycolor: '#dfdfdf',
    secondarycolor: '#b7b7b7',
    secondaryfs: '15px',
    secondaryfst: 'italic',
    border: '1px solid #95d5d2',
    paddingb: '3px',
};

const AboutPageO = () => {
    return (
        <ThemeProvider theme={theme}>
            <MainRoleContainerM>
                <SectionWrapper40A>
                    <InterestsWrapperA>
                        <SectionHeaderA header={ 'Interests & Hobbies' } secondary='true' />
                        <InterestListM />
                    {/** Photo and design in here maybe not use grid?*/}
                    </InterestsWrapperA>
                </SectionWrapper40A>
                <SectionWrapperAutoA>
                    <SectionHeaderA header={'- I\'m Keith Alleman.' } />
                    {/** <DescriptionParagraphA>text</DescriptionParagraph> */}
                    {/** Pull the paragraph from a snipet/json for cleaner code? */}
                    {/** Hobbies | Interests */}
                </SectionWrapperAutoA>
            </MainRoleContainerM>
        </ThemeProvider>
    );
}

export default AboutPageO;

/**
 * Avid Gamer
 * eSports Enthiusiast
 * Dog Lover
 * Continous Learner
 * Model Kit Builder
 * Hiker
 */