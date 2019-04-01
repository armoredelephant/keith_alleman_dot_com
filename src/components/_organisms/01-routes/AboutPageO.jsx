import React from 'react';
import { ThemeProvider } from 'styled-components';

// <Main role='main'> container - Molecule  
import MainRoleContainerM from '../../_molecules/02-body_containers/MainRoleContainerM.jsx';

// placeholder
import SectionWrapperAutoA from '../../_atoms/05-wrappers/SectionWrapperAutoA.jsx';
import SectionHeaderA from '../../_atoms/04-headers/SectionHeaderA.jsx';

// Left Side Grid Wrap - Atom
import GridWrapperA from '../../_atoms/05-wrappers/GridWrapperA.jsx';

const theme = {
    headheight: '100px',
    headff: 'Montserrat',
    ls: '2px',
    primarycolor: '#dfdfdf',
    secondarycolor: '#b7b7b7',
    headfs: '38px'
};

const AboutPageO = () => {
    return (
        <ThemeProvider theme={theme}>
            <MainRoleContainerM>
                <GridWrapperA>
                    {/** Photo and design in here maybe not use grid?*/}
                </GridWrapperA>
                <SectionWrapperAutoA>
                    <SectionHeaderA header={'- I\'m Keith Alleman.' }></SectionHeaderA>
                    {/** <DescriptionParagraphA>text</DescriptionParagraph> */}
                    {/** Pull the paragraph from a snipet/json for cleaner code? */}
                    {/** Hobbies | Interests */}
                </SectionWrapperAutoA>
            </MainRoleContainerM>
        </ThemeProvider>
    );
}

export default AboutPageO;