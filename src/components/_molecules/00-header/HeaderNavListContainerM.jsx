import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { fadeInDown } from 'react-animations';

import HeaderListItemA from '@A/01-list_items/HeaderListItemA';

const fadeInAnimation = keyframes`${fadeInDown}`;

const HeaderNav = styled.nav`
  visiblity: hidden;

  @media (min-width: 670px) {
    margin: auto;
    visibility: visible;
    animation: 1s ${fadeInAnimation};
  }
`;

const ListContainer = styled.ul`
  visibility: hidden;

  @media (min-width: 670px) {
    visibility: visible;
    margin: auto;
    display: flex;
    list-style: none;
    flex-flow: row;
    justify-content: flex-end;
    text-align: center;
    letter-spacing: 1.8px;
  }
`;

const HeaderNavListContainerM = props => {
  const { children } = props;
  return (
    <HeaderNav>
      <ListContainer>{children}</ListContainer>
    </HeaderNav>
  );
};

export default HeaderNavListContainerM;

HeaderNavListContainerM.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element, // prettier-ignore
    PropTypes.arrayOf(PropTypes.element)
  ])
};
HeaderNavListContainerM.defaultProps = { children: [<HeaderListItemA />] };
