import React from 'react';
import { ThemeProvider } from 'styled-components';

// <Main role='main'> container - Molecule  
import MainRoleContainerM from '../../_molecules/02-body_containers/MainRoleContainerM.jsx';

// placeholder
import SectionHeaderA from '../../_atoms/04-headers/SectionHeaderA.jsx';

const theme = {
    headheight: '100px',
    headff: 'Montserrat',
    ls: '2px',
    primarycolor: '#FFF',
    headfs: '50px'
};

const WorkPageO = () => {
    return (
        <MainRoleContainerM align='center' >
            <ThemeProvider theme={theme}>
                {/* placeholder */}
                <SectionHeaderA header={'Work Page'}></SectionHeaderA>
            </ThemeProvider>
        </MainRoleContainerM>
    );
}

export default WorkPageO;