import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeaderListItem = styled.li`
    margin-right: 15px;
`;

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
        border-bottom: 1px solid ${ props => props.theme.secondarycolor };
    }

`;

const StyledHeaderSpan = styled.span`
    color: ${ props => props.theme.secondarycolor };
    margin: 0;
    padding-left: 15px;

    @media (min-width: 720px) {
        visibility: ${ props => props.last ? 'hidden' : 'visible' }
    }
`;

const HeaderListItemA = (props) => {
    const page = props.name.toLowerCase();
    
    return (
        <StyledHeaderListItem>
            <StyledHeaderLink {...props } to={`/${ page }`}
                className={window.location.pathname === `/${ page }` ?
                'section-link-active'
                : 'section-link'} >
            {props.name}
            </StyledHeaderLink>
            <StyledHeaderSpan last={props.last}>&#x2022;</StyledHeaderSpan>
        </StyledHeaderListItem>
    );
}

export default HeaderListItemA;