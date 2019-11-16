import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const IconLink = styled.a`
  font-family: ${props => props.theme.ff};
  font-size: ${props => props.theme.linkfs};
  color: ${props => props.theme.clr};
  margin-left: ${props => props.theme.ml};
  margin-top: ${props => props.theme.mt};
  font-weight: ${props => props.theme.fw};
  text-decoration: none;
  padding-bottom: 0.125em;
  overflow-x: hidden;

  &:visited {
    color: ${props => props.theme.clr};
  }

  &:active,
  &:hover {
    color: ${props => props.theme.primarycolor};
  }
`;

const Icon = styled.i`
  font-size: ${props => props.theme.iconsize};
`;

const IconLinkA = props => {
  const { destination, icon, name } = props;
  return (
    // prettier-ignore
    <IconLink className='section-link' href={destination}>
      {icon ? (
        <Icon className={icon} />
      ) : `${name}`}
    </IconLink>
  );
};
export default IconLinkA;

IconLinkA.propTypes = {
  destination: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};

IconLinkA.defaultProps = {
  destination: "#",
  icon: "",
  name: ""
};
