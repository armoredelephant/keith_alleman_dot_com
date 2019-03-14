import styled, { keyframes } from 'styled-components';
import { fadeInLeft } from 'react-animations';

const fadeInAnimation = keyframes`${fadeInLeft}`;

const FadeInLargeLogo = styled.a`
    visibility: hidden;
    width: 0;
    margin: 0;
    padding: 0;
    @media (max-width: 670px) {
        visibility: visible;
        animation: 1s ${fadeInAnimation};
        color: #FFF;
        font-size: 20px;
        text-align: center;
        letter-spacing: 1.3px;
        margin: auto 0;
        margin-left: 20px;
        width: 100px;
        white-space: nowrap;
        text-transform: uppercase;
    }
`;

export default FadeInLargeLogo;