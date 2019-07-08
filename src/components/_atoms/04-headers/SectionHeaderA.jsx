import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SectionHeaderWrapper = styled.div`
  text-align: ${props => props.align && props.align};
  display: flex;
`;

const StyledHeader = styled.h2`
  white-space: nowrap;
  overflow: hidden;
  text-align: ${props => props.center && 'center'};
  font-family: ${props => props.theme.headff};
  letter-spacing: ${props => props.theme.ls};
  color: ${props => props.theme.primarycolor};
  font-style: ${props => props.secondary && props.theme.secondaryfst};
  font-size: ${props =>
    props.secondary // prettier-ignore
      ? props.theme.secondaryfs
      : props.theme.headfs};

  @media (max-width: 983px) {
    font-size: ${props =>
      props.secondary // prettier-ignore
        ? props.theme.secondaryfs
        : props.theme.mobilefont};
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
