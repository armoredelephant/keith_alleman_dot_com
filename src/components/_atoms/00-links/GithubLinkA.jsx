import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Most of this styling can be passed as theme
// To this and the GhostLink
const Link = styled.a`
  display: ${props => props.theme.btnDisplay};
  width: ${props => props.theme.btnW};
  height: ${props => props.theme.btnH};
  padding: ${props => props.theme.btnP};
  font-size: ${props => props.theme.btnFS};
  text-transform: ${props => props.theme.btnTT};
  letter-spacing: ${props => props.theme.btnLS};
  color: ${props => props.theme.bg};
  background: ${props => props.theme.primarycolor};
  border: .125em solid ${props => props.theme.primarycolor};
  border-radius: ${props => props.theme.btnBorderRadius};
  text-align: ${props => props.theme.btnTA};
  text-decoration: ${props => props.theme.btnTD};
  cursor: ${props => props.theme.btnCursor};
  outline: ${props => props.theme.btnOutline};
  line-height: ${props => props.theme.btnLH};
  order: 2;

  @media (max-width: 23.438em) {
    font-size: .688em;
    padding: .688em 1.500em;
  }
`;

const GithubLinkA = props => {
  const { url } = props;
  return <Link href={url}>Github</Link>;
};

export default GithubLinkA;

GithubLinkA.propTypes = {
  url: PropTypes.string
};

GithubLinkA.defaultProps = {
  url: 'default url'
};
