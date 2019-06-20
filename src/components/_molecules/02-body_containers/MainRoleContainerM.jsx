import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MainRole = styled.section`
  background: #252627;
  height: 800px;
  display: flex;
  justify-content: center;
  padding-top: 70px;
  padding: 70px 15px 70px;

  &:last-of-type {
    padding: 70px 15px 20px;
  }
  
  @media (max-width: 483px) {
    padding: 70px 15px 0;
  };
`;

const MainRoleContainerM = props => {
  const { children } = props;
  return (
    <MainRole {...props}>
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
