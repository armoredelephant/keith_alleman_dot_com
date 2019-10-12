import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
  background: #252627;
  min-height: ${props => props.fixed && '50em'};
  display: flex;
  justify-content: center;
  padding-top: 4.375em;
  padding: 4.375em .938em 4.375em;

  &:last-of-type {
    padding: 4.375em .938em 1.250em;
  }

  @media (max-width: 30.188em) {
    padding: 4.375em .938em 0;
  }
`;

const SectionContainerM = props => {
  const { children } = props;
  return <Section {...props}>{children}</Section>;
};

export default SectionContainerM;

SectionContainerM.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element, // prettier-ignore
    PropTypes.arrayOf(PropTypes.element)
  ])
};

SectionContainerM.defaultProps = {
  children: <div />
};
