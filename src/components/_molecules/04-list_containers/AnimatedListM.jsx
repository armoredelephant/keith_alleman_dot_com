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

  @media (max-width: 770px) {
    width: 100%;
    margin: 0;
  }
`;

const AnimatedListM = props => {
  const { items } = props;
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
};

export default AnimatedListM;

AnimatedListM.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired
};
