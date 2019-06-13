import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import AnimatedListItemA from '@A/01-list_items/AnimatedListItemA';

const List = styled.ul`
  width: 100%;
  height: 100%;
  padding: 0;
  margin-top: 0;
  margin: 0;
  overflow: hidden;

  @media (max-width: 770px) {
    width: 100%;
    margin: 0;
  }
`;

// exported for testing purposes within AnimatedListM.test.jsx
export const BasicListItem = styled.li`
  list-style: none;
  color: ${props => props.theme.sectionfc};
  font-family: ${props => props.theme.headff};
  font-size: 16px;
  letter-spacing: 1.2px;
  line-height: 1.6em;
`;

const AnimatedListM = props => {
  const { animated, items } = props;
  if (animated) {
    return (
      <List data-testid="interest-list">
        {items.map((item, index) => {
          const count = index;
          return (
            <AnimatedListItemA
              count={count} // prettier-ignore
              data-testid="list-item"
              item={item}
              key={`${item}-${count}`}
            />
          );
        })}
      </List>
    );
  }
  return (
    <List data-testid="interest-list">
      {items.map((item, index) => {
        const count = index;
        return <BasicListItem key={`${item}-${count}`}>{item}</BasicListItem>;
      })}
    </List>
  );
};

export default AnimatedListM;

AnimatedListM.propTypes = {
  animated: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.string).isRequired
};

AnimatedListM.defaultProps = {
  animated: false
};
