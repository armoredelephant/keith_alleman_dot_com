import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Dot = styled.span`
  display: inline-block;
  height: 8px;
  width: 8px;
  border-radius: 4px;
  background-color: white;
  margin: 7px 5px;
  opacity: ${props => (props.selected ? '1' : '0.3')};
  transition-duration: 300ms;
`;

const StyledDiv = styled.div`
  position: absolute;
  width: 100%;
  z-index: 100;
  bottom: 0px;
  text-align: center;
`;

const IndicatorDots = props => {
  if (props.total < 2) {
    return <StyledDiv />;
  }
  return (
    <StyledDiv>
      {Array.apply(null, Array(props.total)).map((x, i) => {
        return <Dot key={i} selected={props.index === i} />;
      })}
    </StyledDiv>
  );
};

export default IndicatorDots;

IndicatorDots.propTypes = {
  index: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};
