import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import HeaderLinkA from '@A/00-links/HeaderLinkA';

const StyledHeaderListItem = styled.li`
  margin-right: .938em;
`;

const StyledHeaderSpan = styled.span`
  color: ${props => props.theme.secondarycolor};
  margin: 0;
  padding-left: .938em;

  @media (min-width: 45.000em) {
    display: ${props => props.last && 'none'};
  }
`;

const HeaderListItemA = props => {
  const { last, name } = props;
  return (
    <StyledHeaderListItem>
      <HeaderLinkA name={name} />
      <StyledHeaderSpan last={last}>&#x2022;</StyledHeaderSpan>
    </StyledHeaderListItem>
  );
};

export default HeaderListItemA;

HeaderListItemA.propTypes = {
  last: PropTypes.bool,
  name: PropTypes.string
};
HeaderListItemA.defaultProps = {
  last: false,
  name: 'About'
};
