import styled, { keyframes } from 'styled-components';
import { fadeInDown } from 'react-animations';

const fadeInAnimation = keyframes`${fadeInDown}`;

const HeaderNavListContainerM = styled.ul`
    visibility: hidden;
    
    @media (min-width: 670px) {
        margin: auto;
        visibility: visible;
        animation: 1s ${fadeInAnimation};
        display: flex;
        list-style: none;
        flex-flow: row; 
        justify-content: flex-end;
        text-align: center;
        letter-spacing: 1.8px;
    }
`;

export default HeaderNavListContainerM;