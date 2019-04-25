import styled, { keyframes } from 'styled-components';
import { fadeInLeft } from 'react-animations';
import { HashLink as Link } from 'react-router-hash-link';

const fadeInAnimation = keyframes`${fadeInLeft}`;

const HeaderLgLogoA = styled(Link)`
  visibility: hidden;
  width: 0;
  margin: 0;
  padding: 0;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  color: ${props => props.theme.primarycolor};
  padding-bottom: 2px;
  overflow-x: hidden;
  position: relative;
  display: inline-flex;

  @keyframes fade-in-logo {
    from {
      opacity: 0;
    }
    to {
      opacity: 100;
    }
  }

  @media (max-width: 670px) {
    visibility: visible;
    opacity: 0;
    animation: 1s ${fadeInAnimation};
    color: ${props => props.theme.primarycolor};
    font-size: 20px;
    text-align: center;
    letter-spacing: 1.3px;
    margin: auto 0;
    margin-left: 20px;
    width: 100%;
    white-space: nowrap;
    text-transform: uppercase;
    border-bottom: 1px solid ${props => props.theme.secondarycolor};
    animation: 1.5s linear fade-in-logo;
    animation-fill-mode: forwards;
  }
`;

export default HeaderLgLogoA;
