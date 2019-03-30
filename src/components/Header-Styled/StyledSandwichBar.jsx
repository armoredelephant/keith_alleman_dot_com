import React from 'react';
import styled from 'styled-components';

const SandwichBar = styled.div`
    font-family: 'Montserrat', sans-serif;
    background: #FFF;
    box-sizing: border-box;
    display: block;
    font-size: 18px;
    height: 3px;
    width: 30px;
    line-height: 28.8px;
    margin-bottom: 4px;
    position: relative;

    @keyframes grow-short {
        from { width: 0; }
        to { width: 17px; }
    }

    @keyframes grow {
        from { width: 0; }
        to { width: 30px; }
    }    

    .nav-bar-animation & {
        animation-direction: alternate;
        transition: 0.6s all ease;
        -webkit-transition: 0.6s all ease;
        animation-direction: alternate;
        animation: 0.6s ease-in grow;

        :nth-of-type(3) {
            animation: 0.6s linear grow-short
            width: 17px;
            margin-left: auto;
            margin-right: 5px;
        }
    }

    .nav-bar-active & {
        transition: 0.4s all ease;
        -webkit-transition: 0.4s all ease;
        z-index: 2;

        :nth-of-type(1) {
            transform: translate(0, 7px) rotate(135deg);
            -webkit-transform: translate(0, 7px) rotate(135deg);
        }

        :nth-of-type(2) {
            transform: rotate(45deg);
            -webkit-transform: rotate(45deg);
        }

        :nth-of-type(3) {
            width: 0px;
            margin-left: 0;
        }
    }
`;

const StyledSandwichBar = ( props ) => (
    <SandwichBar {...props} />
);

export default StyledSandwichBar;