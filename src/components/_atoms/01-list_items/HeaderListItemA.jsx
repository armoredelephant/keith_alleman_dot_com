import React from 'react';
import styled from 'styled-components';

import HeaderLinkA from '../00-links/HeaderLinkA.jsx';

const StyledHeaderListItem = styled.li`
    margin-right: 15px;
`;

const StyledHeaderSpan = styled.span`
    color: ${ props => props.theme.secondarycolor };
    margin: 0;
    padding-left: 15px;

    @media (min-width: 720px) {
        visibility: ${ props => props.last ? 'hidden' : 'visible' }
    }
`;

const HeaderListItemA = (props) => {
    return (
        <StyledHeaderListItem>
            <HeaderLinkA {...props } />
            <StyledHeaderSpan last={props.last} >&#x2022;</StyledHeaderSpan>
        </StyledHeaderListItem>
    );
}

export default HeaderListItemA;