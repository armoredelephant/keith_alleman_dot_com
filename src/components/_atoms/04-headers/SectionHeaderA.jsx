import React from 'react';
import styled from 'styled-components';

const SectionHeaderWrapper = styled.div`
    height: ${ props => props.theme.headheight };
    display: flex;
`;

const StyledHeader = styled.h2`
    text-align: center;
    margin: auto;
    font-family: ${ props => props.theme.headff };
    letter-spacing: ${ props => props.theme.ls };
    color: ${ props => props.theme.primarycolor };
    font-size: ${ props => props.theme.headfs };
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