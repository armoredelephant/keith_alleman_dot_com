import React from 'react';
import styled from 'styled-components';


const ButtonWrapper = styled.div`
    display: flex;
`;

const Button = styled.div`
  width: 30px;
  height: 30px;
  cursor: pointer;
  user-select: none;
  position: absolute;
  font-size: 30px;
  font-family: sans-serif;
  color: rgba(255, 255, 255, 0.8);

  &.left {
    left: 0;
    margin-left: 10x;
  }

  &.right {
    right: 0;
  }
`;

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
  width: 100%;
  display: flex;
  justify-content: center;
`;

const CarouselButtonsA = props => {
  const { count, index, nextHandler, prevHandler, total } = props;
  const keyArray = [];

  return (
    <ButtonWrapper>
      {(index !== 0) &&
        <Button className='left' onClick={prevHandler}>&lt;</Button>
      }
      {/* Radio Buttons */}
      {(total < 2) ?
        <StyledDiv />
        : <StyledDiv>
          {Array(...Array(total)).map((x, i) => {
            return <Dot key={keyArray[i]} selected={index === i} />;
          })}
        </StyledDiv>
      }
      {(index !== count) &&
        <Button className='right' onClick={nextHandler}>&gt;</Button>
      }
    </ButtonWrapper>
  );
}

export default CarouselButtonsA;