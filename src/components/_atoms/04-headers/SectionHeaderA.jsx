import React from 'react';
import styled from 'styled-components';

const SectionHeaderWrapper = styled.div`
    height: ${ props => props.theme.headheight || '100px' };
    display: flex;
`;

const StyledHeader = styled.h2`
    text-align: center;
    margin: auto;
    font-family: ${ props => props.theme.headff, 'Arial', 'Helvetica', 'sans-serif' };
    letter-spacing: ${ props => props.theme.ls  || '1.4px' };
    color: ${ props => props.theme.primarycolor || '#FFF' };
    font-size: ${ props => props.theme.headfs || '32px' };
`;

const SectionHeaderA = ( props ) => {
    return (
        <SectionHeaderWrapper>
            <StyledHeader>
            {props.header}
            </StyledHeader>
        </SectionHeaderWrapper>
    );
}

export default SectionHeaderA;