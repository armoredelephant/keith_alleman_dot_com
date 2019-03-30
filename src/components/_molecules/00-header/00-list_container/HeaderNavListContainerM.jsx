import React from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeInDown } from 'react-animations';

const fadeInAnimation = keyframes`${ fadeInDown }`;

const HeaderNav = styled.nav`
    visiblity: hidden;

    @media (min-width: 670px) {
        margin: auto;
        visibility: visible;
        animation: 1s ${ fadeInAnimation };
    }
`;

const ListContainer = styled.ul`
    visibility: hidden;

    @media (min-width: 670px) {
        visibility: visible;
        margin: auto;
        display: flex;
        list-style: none;
        flex-flow: row; 
        justify-content: flex-end;
        text-align: center;
        letter-spacing: 1.8px;
    }
`;

const HeaderNavListContainerM = ( props ) => (
    <HeaderNav>
        <ListContainer>
            {props.children}
        </ListContainer>
    </HeaderNav>
);

export default HeaderNavListContainerM;