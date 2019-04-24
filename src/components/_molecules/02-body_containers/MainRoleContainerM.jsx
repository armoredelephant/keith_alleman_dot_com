import React from 'react';
import styled from 'styled-components';

const MainRole = styled.main`
  background: #252627;
  min-height: 1000px;
  max-height: 1000px;
  height: 100%;
  width: 100%;
  overflow: hidden;
  padding-top: 70px;
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  flex-flow: row;
  justify-content: ${props => props.align || ''};

  @media (max-width: 983px) {
    &.about-page {
      display: flex;
      flex-flow: column;
      margin: 0 auto;
    }
  }

  @media (max-width: 670px) {
    display: flex;
    flex-flow: column;
  }
`;

const MainRoleContainerM = props => {
  return (
    <MainRole {...props} role="main">
      {props.children}
    </MainRole>
  );
};

export default MainRoleContainerM;
