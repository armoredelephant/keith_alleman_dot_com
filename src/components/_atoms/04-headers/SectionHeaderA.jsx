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
    font-size: ${ props => props.secondary ? props.theme.secondaryfs : props.theme.headfs };
    font-style: ${ props => props.secondary ? props.theme.secondaryfst : '' }
    border-bottom: ${ props => props.secondary ? props.theme.border : '' }
    padding-bottom: ${ props => props.secondary ? props.theme.paddingb : '' }
`;

const SectionHeaderA = ( props ) => {
    return (
        <SectionHeaderWrapper>
            <StyledHeader { ...props }>
            { props.header }
            </StyledHeader>
        </SectionHeaderWrapper>
    );
}

export default SectionHeaderA;