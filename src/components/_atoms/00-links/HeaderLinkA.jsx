import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeaderLink = styled(Link)`
    text-decoration: none;
    color: ${ props => props.theme.primarycolor };
    padding-bottom: 2px;
    overflow-x: hidden;
    position: relative;
    display: inline-flex;

    &:active,
    &:hover {
        color: ${ props => props.theme.primarycolor };
    }

    &.section-link {
        &:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            height: 1px;
            background: ${ props => props.theme.secondarycolor };
            width: 100%;
            transform: translate3d(-110%, 0, 0);
            -webkit-transform: translate3d(-110%, 0, 0);
            transition: transform .3s ease-in-out;
            -webkit-transition: transform .3s ease-in-out;
        }

        &:hover:after {
            transform: translate3d(0%, 0, 0);
            -webkit-transform: translate3d(0%, 0, 0);
        }
    }

    &.section-link-active {
        border-bottom: 1px solid ${ props => props.theme.secondarycolor || '#95d5d2' };
    }

`;

const HeaderLinkA = ( props ) => {
    const page = props.name.toLowerCase();
    return (
        <StyledHeaderLink {...props } to={`/${ page }`}
            className={props.testclass || window.location.pathname === `/${ page }` ? // refactor this to be controlled by HeaderO and pass down the prop.
            'section-link-active'
            : 'section-link'} >
        {props.name}
        </StyledHeaderLink>
    )
}

export default HeaderLinkA;