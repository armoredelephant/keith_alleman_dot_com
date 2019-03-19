import styled, { keyframes } from 'styled-components';
import { fadeInLeft } from 'react-animations';
import { Link } from 'react-router-dom';

const fadeInAnimation = keyframes`${fadeInLeft}`;

const FadeInLargeLogo = styled(Link)`
    visibility: hidden;
    width: 0;
    margin: 0;
    padding: 0;
    text-decoration: none;
    color: #FFF;
    padding-bottom: 2px;
    overflow-x: hidden;
    position: relative;
    display: inline-flex;
    
    @keyframes fade-in-logo {
        from { opacity: 0; }
        to { opacity: 100; }
    }

    @media (max-width: 670px) {
        visibility: visible;
        opacity: 0;
        animation: 1s ${fadeInAnimation};
        color: #FFF;
        font-size: 20px;
        text-align: center;
        letter-spacing: 1.3px;
        margin: auto 0;
        margin-left: 20px;
        width: 100%;
        white-space: nowrap;
        text-transform: uppercase;
        border-bottom: 1px solid #95d5d2;
        animation: 1.5s linear fade-in-logo;
        animation-fill-mode: forwards;
    }
`;

export default FadeInLargeLogo;

/** Fade in border
 *     @keyframes logo-border {
            from { border-bottom: 1px solid #594F4F;; }
            to { border-bottom: 1px solid #95d5d2; }
    }
 * 
 */

 /** Fade in border from left
  *     @keyframes test {
        from { width: 0; }
        to { width: 39%; }
    }
  */