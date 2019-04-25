import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHeaderSandwich = styled.a`
  transition: 275ms all ease;
  -webkit-transition: 275ms all ease;
  cursor: pointer;
  padding: 10px 0;
  margin-right: 15px;
  height: 40px;
  width: 35px;
  box-sizing: border-box;
  position: fixed;
  top: 15px;
  right: 15px;
  border: none;
  z-index: 2;

  &.nav-bar-animation {
    display: block;
  }

  &.nav-bar-active {
    display: inline-block;
  }

  @media (min-width: 900px) {
    &.nav-bar-animation {
      &:hover div {
        :nth-of-type(1) {
          transform: translateY(6px) rotate(90deg);
          -webkit-transform: translateY(6px) rotate(90deg);
          width: 30px;
        }

        :nth-of-type(2) {
          width: 30px;
        }

        :nth-of-type(3) {
          width: 0;
          margin-left: auto;
        }
      }
    }
  }
`;

const SandwichBar = styled.div`
    font-family: 'Montserrat', sans-serif;
    background: #FFF;
    box-sizing: border-box;
    display: block;
    font-size: 18px;
    height: 3px;
    width: 30px;
    line-height: 28.8px;
    margin-bottom: 4px;
    position: relative;

    @keyframes grow-short {
        from { width: 0; }
        to { width: 17px; }
    }

    @keyframes grow {
        from { width: 0; }
        to { width: 30px; }
    }    

    .nav-bar-animation & {
        animation-direction: alternate;
        transition: 0.6s all ease;
        -webkit-transition: 0.6s all ease;
        animation-direction: alternate;
        animation: 0.6s ease-in grow;

        :nth-of-type(3) {
            animation: 0.6s linear grow-short
            width: 17px;
            margin-left: auto;
            margin-right: 5px;
        }
    }

    .nav-bar-active & {
        transition: 0.4s all ease;
        -webkit-transition: 0.4s all ease;
        z-index: 2;

        :nth-of-type(1) {
            transform: translate(0, 7px) rotate(135deg);
            -webkit-transform: translate(0, 7px) rotate(135deg);
        }

        :nth-of-type(2) {
            transform: rotate(45deg);
            -webkit-transform: rotate(45deg);
        }

        :nth-of-type(3) {
            width: 0px;
            margin-left: 0;
        }
    }
`;

// change to use onMouseEnter/onMouseLeave instead of hover from css?
const HeaderNavSandwichM = props => {
  const { handleAnimation, activeSandwich } = props;
  return (
    <StyledHeaderSandwich
      onClick={handleAnimation}
      className={
        activeSandwich === 'true' // prettier-ignore
          ? 'nav-bar-active'
          : 'nav-bar-animation'
      }
    >
      <SandwichBar />
      <SandwichBar />
      <SandwichBar />
    </StyledHeaderSandwich>
  );
};
export default HeaderNavSandwichM;

HeaderNavSandwichM.propTypes = {
  handleAnimation: PropTypes.func,
  activeSandwich: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};

HeaderNavSandwichM.defaultProps = {
  handleAnimation: a => {
    return a;
  },
  activeSandwich: 'false'
};
