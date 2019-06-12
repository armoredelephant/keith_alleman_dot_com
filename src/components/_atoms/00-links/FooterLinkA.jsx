import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const IconLink = styled.a`
  font-family: ${props => props.theme.ff};
  font-size: ${props => props.theme.linkfs};
  color: ${props => props.theme.clr};
  margin-left: ${props => props.theme.ml};
  margin-top: ${props => props.theme.mt};
  font-weight: ${props => props.theme.fw};
  text-decoration: none;

  &:visited {
    color: ${props => props.theme.clr};
  }
`;

const Icon = styled.i`
  font-size: ${props => props.theme.iconsize};
`;

const IconLinkA = props => {
  const { destination, icon, name } = props;
  return (
    // prettier-ignore
    <IconLink href={destination}>
      {icon ? (
        <Icon className={icon} />
      ) : `${name}`}
    </IconLink>
  );
};
export default IconLinkA;

IconLinkA.propTypes = {
  destination: PropTypes.string,
  icon: PropTypes.string,
  name: PropTypes.string
};

IconLinkA.defaultProps = {
  destination: '#',
  icon: '',
  name: ''
};
