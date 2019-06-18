import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 50px 15px 0;
    display: flex;
    flex-flow: column;
    background: #252627;
`;

const CarouselWrapper = styled.div`
    background: #252627;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: hidden;
`;

const ChildContainer = styled.div`
    display: flex;
    flex: 0 0 auto;
    width: 100%;
    order: ${props => props.flexOrder};
    position: relative;
`;

const Carousel = (props) => {
    const { widget, children } = props;
    const lastIndex = children.length - 1;
    const Button = widget;
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevHandler = () => {
        let i = currentIndex;
        setCurrentIndex(i -= 1);
    };

    const nextHandler = () => {
        let i = currentIndex;
        setCurrentIndex(i += 1);
    };

    return (
        <CarouselContainer>
            <CarouselWrapper>
                {children.map(child => {
                    return (
                        <ChildContainer flexOrder={child.flexOrder}>
                            {child}
                        </ChildContainer>
                    );
                })}
            </CarouselWrapper>
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