import React from 'react';
import styled from 'styled-components';

const StyledHeaderSandwich = styled.a`
    transition: 275ms all ease;
    -webkit-transition: 275ms all ease;
    cursor: pointer;
    padding: 10px 0;
    margin-right: 15px;
    height: 40px;
    width: 35px;
    box-sizing: border-box;
    position: fixed;
    top: 15px;
    right: 15px;
    border: none;
    z-index: 2;

    &.nav-bar-animation {
        display: block;
        background: #594F4F;
    }

    &.nav-bar-active {
        display: inline-block;
        background: none;
    }

    @media (min-width: 900px) {
        &.nav-bar-animation {
            &:hover div {
                :nth-of-type(1) {
                    transform: translateY(6px) rotate(90deg);
                    -webkit-transform: translateY(6px) rotate(90deg);
                    width: 30px;
                }
        
                :nth-of-type(2) {
                    width: 30px;
                }
    
                :nth-of-type(3) {
                    width: 0;
                    margin-left: auto;
                }
            }
        }
    }
`;

const HeaderSandwich = (props) => (
    <StyledHeaderSandwich onClick={props.handleAnimation} className={props.activeSandwich ? 'nav-bar-active' : 'nav-bar-animation' }>
    {props.children}
    </StyledHeaderSandwich>
)        
export default HeaderSandwich;