import styled, { keyframes } from 'styled-components';
import { fadeInLeft } from 'react-animations';
import { Link } from 'react-router-dom';

const fadeInAnimation = keyframes`${ fadeInLeft }`;

const HeaderSmLogoA = styled(Link)`
    visibility: hidden;
    text-decoration: none;
    color: ${ props => props.theme.primarycolor };
    padding-bottom: 2px;
    overflow-x: hidden;
    position: relative;
    display: inline-flex;

    @media (min-width: 670px) {
        visibility: visible;
        animation: 1s ${ fadeInAnimation };
        font-size: 20px;
        padding-right: 15px;
        border-right: 2px solid ${ props => props.theme.secondarycolor };
        text-align: center;
        letter-spacing: .8px;
        margin: auto 0;
        margin-left: 20px;
    }
}
`;

export default HeaderSmLogoA;