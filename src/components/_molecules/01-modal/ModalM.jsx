import React from 'react';
import styled from 'styled-components';

// linear-gradient(146deg, #252627, #252627 54.8%, #95d5d2 55%);

import ContactContainerA from '@A/07-containers/ContactContainerA';

const StyledModal = styled.div`
  position: fixed;
  background: linear-gradient(130deg, #252627, #252627 21.8%, #95d5d2 22%);
  background-size: cover;
  background-repeat: no-repeat;
  color: #fff;
  top: 0;
  left: auto;
  right: calc(-40% - .938em);
  width: 40%;
  min-height: 100%;
  opacity: 0;
  visibility: hidden;
  transition-property: all;
  transition-duration: 1.5s;
  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
  transition-delay: 0.5s;
  overflow: hidden;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  justify-content: space-between;

  .active & {
    opacity: 1;
    visibility: visible;
    right: 0;
    z-index: 1;
    box-shadow: 0 .063em .063em 0 rgba(0, 0, 0, 0.1);
    transition-delay: 0.7s;
  }

  @media (max-width: 74.938em) {
    width: 50%;
  }

  @media (max-width: 37.500em) {
    width: 100%;
  }
`;

const ModalM = () => {
  return (
    <StyledModal>
      <ContactContainerA />
    </StyledModal>
  );
};

export default ModalM;
