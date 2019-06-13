import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Link = styled.a`
  display: ${props => props.theme.btnDisplay};
  width: ${props => props.theme.btnW};
  height: ${props => props.theme.btnH};
  padding: ${props => props.theme.btnP};
  font-size: ${props => props.theme.btnFS};
  text-transform: ${props => props.theme.btnTT};
  letter-spacing: ${props => props.theme.btnLS};
  color: ${props => props.theme.primarycolor};
  border: 2px solid ${props => props.theme.primarycolor};
  border-radius: ${props => props.theme.btnBorderRadius};
  text-align: ${props => props.theme.btnTA};
  text-decoration: ${props => props.theme.btnTD};
  cursor: ${props => props.theme.btnCursor};
  outline: ${props => props.theme.btnOutline};
  line-height: ${props => props.theme.btnLH};
  position: ${props => props.theme.btnPos};
  right: 175px;

  @media (max-width: 375px) {
    font-size: 11px;
    padding: 11px 24px;
  }
`;

const GhostLinkA = props => {
  const { url } = props;
  return <Link href={url}>Visit</Link>;
};

export default GhostLinkA;

GhostLinkA.propTypes = {
  url: PropTypes.string
};

GhostLinkA.defaultProps = {
  url: 'https://www.keithalleman.com'
};
