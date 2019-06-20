import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import HeaderLinkA from '@A/00-links/HeaderLinkA';

const StyledHeaderListItem = styled.li`
  margin-right: 15px;
`;

const StyledHeaderSpan = styled.span`
  color: ${props => props.theme.secondarycolor};
  margin: 0;
  padding-left: 15px;

  @media (min-width: 720px) {
    display: ${props => props.last === 'true' && 'none'};
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
  last: PropTypes.string,
  name: PropTypes.string
};
HeaderListItemA.defaultProps = {
  last: 'false',
  name: 'About'
};
