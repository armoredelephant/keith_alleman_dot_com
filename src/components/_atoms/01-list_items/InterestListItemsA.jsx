import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { fadeInLeft } from 'react-animations';

const fadeInAnimation = keyframes`${fadeInLeft}`;

const InterestListItem = styled.li`
  @keyframes fade-in-left {
    from {
      opacity: 0;
    }
    to {
      opacity: 100;
    }
  }

  opacity: 0;
  list-style: none;
  color: ${props => props.theme.sectionfc};
  font-family: ${props => props.theme.headff};
  font-size: 12px;
  letter-spacing: 1.2px;
  line-height: 1.6em;
  animation: 1s ${fadeInAnimation} ${props => `${props.count}s`};
  animation-fill-mode: forwards;
`;

const InterestListItemA = props => {
  const { interest } = props;
  return (
    <React.Fragment>
      {/** Icon here somehow? */}
      <InterestListItem {...props}>{interest}</InterestListItem>
    </React.Fragment>
  );
};

export default InterestListItemA;

InterestListItemA.propTypes = { interest: PropTypes.string };
InterestListItemA.defaultProps = { interest: 'coding' };
