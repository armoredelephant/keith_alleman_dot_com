import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SectionHeaderWrapper = styled.div`
  max-height: ${props => (props.secondary ? '75px' : '')};
  height: ${props => props.theme.headheight};
  display: flex;
`;

const StyledHeader = styled.h2`
  white-space: nowrap;
  overflow: hidden;
  margin: ${props => (props.margin ? props.margin : 'auto')};
  font-family: ${props => props.theme.headff};
  letter-spacing: ${props => props.theme.ls};
  color: ${props => props.theme.primarycolor};
  font-size: ${props => (props.secondary ? props.theme.secondaryfs : props.theme.headfs)};
  font-style: ${props => (props.secondary ? props.theme.secondaryfst : '')};
  padding-bottom: ${props => (props.secondary ? props.theme.paddingb : '')};

  @media (max-width: 660px) {
    font-size: ${props => (props.secondary ? props.theme.secondaryfs : props.theme.mobilefont)};
    margin: ${props => (props.secondary ? '' : 'auto 0')};
  }
`;

const SectionHeaderA = props => {
  const { header } = props;
  return (
    <SectionHeaderWrapper {...props}>
      <StyledHeader {...props}>{header}</StyledHeader>
    </SectionHeaderWrapper>
  );
};

export default SectionHeaderA;

SectionHeaderA.propTypes = { header: PropTypes.string };
SectionHeaderA.defaultProps = { header: 'header' };
