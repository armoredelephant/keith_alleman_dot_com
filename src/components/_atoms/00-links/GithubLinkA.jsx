import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Most of this styling can be passed as theme
// To this and the GhostLink
const Link = styled.a`
    display: inline-block;
    width: auto;
    height: auto;
    padding: 21px 34px;
    font-size: 15px;
    text-transform: uppercase;
    letter-spacing: .1em;
    color: ${props => props.theme.bg};
    background: ${props => props.theme.primarycolor};
    border: 2px solid ${props => props.theme.primarycolor};
    border-width: 2px;
    border-style: solid;
    border-radius: 30px;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    outline: none;
    line-height: normal;
    position: absolute;
    right: 10px;

`;

const GithubLinkA = props => {
    const { url } = props;
    return (
        <Link href={url}>Github</Link>
    );
};

export default GithubLinkA;

GithubLinkA.propTypes = {
    url: PropTypes.string
};

GithubLinkA.defaultProps = {
    url: "default url"
}


