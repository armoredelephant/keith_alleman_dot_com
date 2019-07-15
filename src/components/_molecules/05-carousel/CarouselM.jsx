import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import CarouselButtonsA from '@A/10-buttons/CarouselButtonsA';

const CarouselContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  padding: 50px 0 0;
  display: flex;
  flex-flow: column;
  background: #252627;
`;

const Slider = styled.div`
  background: #252627;
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
`;

const ChildContainer = styled.div`
  display: flex;
  flex: 0 0 auto;
  width: 100%;
  position: relative;
  transform: translateX(${props => props.x});
  transition-duration: 0.7s;
`;

const CarouselM = props => {
  const { widget, children } = props;
  const lastIndex = children.length - 1;
  const Button = widget;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [moveBy, setMoveBy] = useState('0%');

  const sliderRef = useRef(null);

  const determineTranslate = () => {
    const current = moveBy.replace(/[%]/g, '');
    return parseInt(current, 10);
  };

  const prevHandler = () => {
    let i = currentIndex;
    setCurrentIndex((i -= 1));
    let n = determineTranslate(moveBy);
    setMoveBy(`${(n += 100)}%`);
  };

  const nextHandler = () => {
    let i = currentIndex;
    setCurrentIndex((i += 1));
    let n = determineTranslate(moveBy);
    setMoveBy(`${(n -= 100)}%`);
  };

  return (
    <CarouselContainer>
      <Slider ref={sliderRef}>
        {children.map(child => {
          const rdmKey = Math.random()
            .toString(36)
            .substring(7);
          return (
            <ChildContainer
              x={moveBy} // prettier-ignore
              key={rdmKey}
            >
              {child}
            </ChildContainer>
          );
        })}
      </Slider>
      {widget && (
        <Button
          nextHandler={nextHandler}
          prevHandler={prevHandler}
          count={lastIndex}
          index={currentIndex}
          total={children.length}
        />
      )}
    </CarouselContainer>
  );
};

export default CarouselM;

CarouselM.propTypes = {
  widget: PropTypes.oneOfType([
    // prettier-ignore
    PropTypes.element,
    PropTypes.func
  ]),
  children: PropTypes.oneOfType([
    // prettier-ignore
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired
};

CarouselM.defaultProps = {
  widget: <CarouselButtonsA />
};
