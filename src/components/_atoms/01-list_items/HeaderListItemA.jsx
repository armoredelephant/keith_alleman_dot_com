import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import HeaderLinkA from '../00-links/HeaderLinkA';

const StyledHeaderListItem = styled.li`
  margin-right: 15px;
`;

const StyledHeaderSpan = styled.span`
  color: ${props => props.theme.secondarycolor};
  margin: 0;
  padding-left: 15px;

  @media (min-width: 720px) {
    visibility: ${props => (props.last === 'true' ? 'hidden' : 'visible')};
  }
`;

const HeaderListItemA = props => {
  const { last } = props;
  return (
    <StyledHeaderListItem>
      <HeaderLinkA {...props} />
      <StyledHeaderSpan last={last}>&#x2022;</StyledHeaderSpan>
    </StyledHeaderListItem>
  );
};

export default HeaderListItemA;

HeaderListItemA.propTypes = { last: PropTypes.string };
HeaderListItemA.defaultProps = { last: 'false' };
