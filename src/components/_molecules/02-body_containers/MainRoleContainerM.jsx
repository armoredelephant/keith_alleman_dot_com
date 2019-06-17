import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MainRole = styled.main`
  background: #252627;
  display: flex;
  justify-content: center;
  padding-top: 70px;
  padding: 70px 15px 0; 

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
