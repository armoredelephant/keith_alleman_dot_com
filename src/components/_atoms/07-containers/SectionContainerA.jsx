import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  width: 100%;
  max-width: 80em;
  display: flex;
  flex-flow: row;
  overflow: hidden;
`;

const SectionContainerA = props => {
  const { children } = props;
  return <Container>{children}</Container>;
};

export default SectionContainerA;

SectionContainerA.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element, // prettier-ignore
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired
};
