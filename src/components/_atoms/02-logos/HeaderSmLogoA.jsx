import styled, { keyframes } from 'styled-components';
import { fadeInLeft } from 'react-animations';
import { HashLink as Link } from 'react-router-hash-link';

const fadeInAnimation = keyframes`${fadeInLeft}`;

const HeaderSmLogoA = styled(Link)`
    visibility: hidden;
    text-decoration: none;
    color: ${props => props.theme.primarycolor};
    padding-bottom: 0.125em;
    font-family: 'Montserrat', sans-serif;
    overflow-x: hidden;
    position: relative;
    display: inline-flex;

    @media (min-width: 41.875em) {
        visibility: visible;
        animation: 1s ${fadeInAnimation};
        font-size: 1.250em;
        padding-right: 0.938em;
        border-right: 0.125em solid ${props => props.theme.secondarycolor};
        text-align: center;
        letter-spacing: 0.050em;
        margin: auto 0;
        margin-left: 1.250em;
    }
}
`;

export default HeaderSmLogoA;
