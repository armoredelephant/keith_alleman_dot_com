import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const IconLink = styled.a`
  font-size: ${props => props.theme.fs};
  color: ${props => props.theme.clr};
  margin-left: ${props => props.theme.ml};
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
