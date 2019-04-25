import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// linear-gradient(146deg, #252627, #252627 54.8%, #95d5d2 55%);

const StyledModal = styled.div`
  position: fixed;
  background: linear-gradient(146deg, #252627, #252627 54.8%, #95d5d2 55%);
  background-size: content;
  color: #fff;
  top: 0;
  left: auto;
  right: calc(-40% - 15px);
  width: 40%;
  height: 100%;
  opacity: 0;
  visibility: hidden;
  transition-property: all;
  transition-duration: 1.5s;
  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
  transition-delay: 0.5s;
  overflow: hidden;
  display: flex;
  display: -webkit-flex;
  flex-direction: row;
  align-content: stretch;

  .active & {
    opacity: 1;
    visibility: visible;
    right: 0;
    z-index: 1;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
    transition-delay: 0.7s;
  }

  @media (max-width: 1199px) {
    width: 50%;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const ModalM = props => {
  const { children } = props;
  return <StyledModal>{children}</StyledModal>;
};

export default ModalM;

ModalM.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element, // prettier-ignore
    PropTypes.arrayOf(PropTypes.element)
  ])
};

ModalM.defaultProps = {
  children: <div />
};
