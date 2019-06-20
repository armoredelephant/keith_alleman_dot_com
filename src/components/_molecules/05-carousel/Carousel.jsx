import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
    width: 100%;
    max-width: 1280px;
    height: 100%;
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
    transition-duration: .7s;
`;

const Carousel = (props) => {
    const { widget, children } = props;
    const lastIndex = children.length - 1;
    const Button = widget;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [moveBy, setMoveBy] = useState('0%');

    const sliderRef = useRef(null);

    const determineTranslate = string => {
        const current = moveBy.replace(/[%]/g, "");
        return parseInt(current, 10);
    }

    const prevHandler = () => {
        let i = currentIndex;
        setCurrentIndex(i -= 1);
        let n = determineTranslate(moveBy)
        setMoveBy(`${n += 100}%`);
    };

    const nextHandler = () => {
        let i = currentIndex;
        setCurrentIndex(i += 1);
        let n = determineTranslate(moveBy)
        setMoveBy(`${n -= 100}%`);
    };

    return (
        <CarouselContainer>
            <Slider ref={sliderRef}>
                {children.map((child, i) => {
                    return (
                        <ChildContainer
                            x={moveBy} // prettier-ignore
                            key={i}>
                            {child}
                        </ChildContainer>
                    );
                })}
            </Slider>
            {widget &&
                <Button
                    nextHandler={nextHandler}
                    prevHandler={prevHandler}
                    count={lastIndex}
                    index={currentIndex}
                    total={children.length} />
            }
        </CarouselContainer>
    );
};

export default Carousel;

/**
 * store
 */