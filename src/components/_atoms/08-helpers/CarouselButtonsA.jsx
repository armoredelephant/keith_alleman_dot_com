import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  z-index: 100;
  bottom: 0;
  text-align: center;
`;

const Button = styled.div`
  width: 30px;
  height: 30px;
  cursor: pointer;
  user-select: none;
  position: absolute;
  bottom: 0;
  font-size: 30px;
  font-family: sans-serif;
  color: rgba(255, 255, 255, 0.8);

  &.left {
    left: 0;
  }

  &.right {
    right: 0;
  }
`;

const CarouselButtonsA = props => {
  const { index, loop, nextHandler, prevHandler, total } = props;
  return (
    <Wrapper>
      {(loop || index !== 0) && (
        <Button className="left" onClick={prevHandler}>
          &#x2BC7;
        </Button>
      )}
      {(loop || index !== total - 1) && (
        <Button className="right" onClick={nextHandler}>
          &#x2BC8;
        </Button>
      )}
    </Wrapper>
  );
};

export default CarouselButtonsA;

CarouselButtonsA.propTypes = {
  index: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  loop: propTypes.bool,
  prevHandler: propTypes.func,
  nextHandler: propTypes.func
};

CarouselButtonsA.defaultProps = {
  loop: false,
  prevHandler: () => {},
  nextHandler: () => {}
};
