import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MainRole = styled.main`
  background: #252627;
  min-height: ${props => (props.vh ? props.vh : '600px')};
  height: ${props => (props.carousel ? '900px' : '')};
  width: 100%;
  overflow: hidden;
  padding-top: 70px;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: ${props => props.theme.pb || ''};
  display: flex;
  flex-flow: row;
  justify-content: ${props => props.align || ''};

  @media (max-width: 983px) {
    min-height: auto;
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
  const { children } = props;
  return (
    <MainRole {...props} role="main">
      {children}
    </MainRole>
  );
};

export default MainRoleContainerM;

MainRoleContainerM.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element, // prettier-ignore
    PropTypes.arrayOf(PropTypes.element)
  ])
};

MainRoleContainerM.defaultProps = {
  children: <div />
};
