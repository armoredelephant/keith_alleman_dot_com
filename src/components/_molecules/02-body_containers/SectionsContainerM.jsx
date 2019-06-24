import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
  background: #252627;
  height: ${props => props.fixed && '800px'};
  display: flex;
  justify-content: center;
  padding-top: 70px;
  padding: 70px 15px 70px;

  &:last-of-type {
    padding: 70px 15px 20px;
  }
  
  @media (max-width: 483px) {
    padding: 70px 15px 0;
  };
`;

const SectionContainerM = props => {
  const { children } = props;
  return (
    <Section {...props}>
      {children}
    </Section>
  );
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
